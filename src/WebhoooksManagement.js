'use strict';
console.log(`WebhooksManagement.js is loaded`);

const apiKey = import.meta.env.VITE_NEYNAR_API_KEY;
const base = "https://api.neynar.com/";

const webhook_id_local = import.meta.env.VITE_WEBHOOK_ID_LOCAL;
const webhookName_local = import.meta.env.VITE_WEBHOOK_NAME_LOCAL;
const targetUrl_local = import.meta.env.VITE_WEBHOOK_TARGETURL_LOCAL;

const webhook_id_base = import.meta.env.VITE_WEBHOOK_ID_LIVE_BASE;
const webhookName_base = import.meta.env.VITE_WEBHOOK_NAME_LIVE_BASE;
const targetUrl_base = import.meta.env.VITE_WEBHOOK_TARGETURL_LIVE_BASE;


const webhook_id_sepolia = import.meta.env.VITE_WEBHOOK_ID_LIVE_SEPOLIA;
const webhookName_sepolia = import.meta.env.VITE_WEBHOOK_NAME_LIVE_SEPOLIA;
const targetUrl_sepolia = import.meta.env.VITE_WEBHOOK_TARGETURL_LIVE_SEPOLIA;

let webhook_id,  webhookName, targetUrl ;

// chainIdNumber:  0:local | 8354:live_base | 83542:live_sepolia     
// local points to ngrok and localhost,   
// live_base points to live website when user is connected to base chain, 
// live_sepolia points to live website when user is connected to sepolia chain
const setup_webhooks = async (chainIdNumber) => {

	if (chainIdNumber===0) {
		webhook_id = webhook_id_local;
		webhookName = webhookName_local;
		targetUrl = targetUrl_local;
	}
	else if (chainIdNumber===8453) {
		webhook_id = webhook_id_base;
		webhookName = webhookName_base;
		targetUrl = targetUrl_base;
	}
	else if (chainIdNumber===84532) {
		webhook_id = webhook_id_sepolia;
		webhookName = webhookName_sepolia;
		targetUrl = targetUrl_sepolia;
	}

	console.log(`setup_webhooks|> chainIdNumber: ${chainIdNumber} webhook_id: ${webhook_id} webhookName: ${webhookName} targetUrl: ${targetUrl}`);
}




//#region ******************  

//#region
const fetchWebhookData = async (webhook_id) => {
	const url = `${base}v2/farcaster/webhook?webhook_id=${webhook_id}`;
	const options = {
	  method: 'GET',
	  headers: {
		accept: 'application/json',
		api_key: apiKey,
		'content-type': 'application/json'
	  },
	};
  
	try {
	  const res = await fetch(url, options);
	  if (!res.ok) {
		throw new Error('Network response was not ok ' + res.statusText);
	  }
	  const json = await res.json();
	  // console.log(json);
	  return json;
	} catch (err) {
	  console.error('Error:', err);
	}
};
//#endregion

//#region action: add | remove
const amendRegex = (patternIsUrl=false, action="add", pattern=`\\b(Wonderful weather|Amazing day)\\b`, newPhrase="Swkrates Ole") => {
    let new_pattern;
    console.log(`amendRegex patternIsUrl: ${patternIsUrl} action: ${action} newPhrase: ${newPhrase} pattern: `,pattern);
    
    //Case 1
    if ( (typeof patternIsUrl !== 'boolean') || (action!=="add" && action!=="remove") || newPhrase==="") 
    {
      console.log(`amendRegex Provided parameters are not correct patternIsUrl: ${patternIsUrl} action: ${action} newPhrase: ${newPhrase} pattern: `,pattern);
      return pattern;
    }
  
    //Case 2
    if (pattern==="")
    {
      console.log(`amendRegex provided pattern is empty`);
      let newRegex;
      if (action === 'add')
      {
        newRegex = '\\b(';

        if (patternIsUrl) 
        {
          let temp = newPhrase.replace(/\./g, '\\.');
          newRegex += temp.replace(/https:\/\//g, 'https:\\/\\/');
        } else newRegex +=newPhrase;

        newRegex += ')\\b';
      } else newRegex = pattern;

      return newRegex;
    }

    //Case 3
    if (patternIsUrl)
    {
      new_pattern = pattern.replace("\\b(","").replace(")\\b","");
    //   console.log(`55555555> new_pattern: `,new_pattern);
      new_pattern = new_pattern.trim().replace(/\\\//g, '/').replace(/\\./g, '.');
    //   console.log(`77777777> new_pattern: `,new_pattern);
    }
    else new_pattern = pattern.replace(/^\\b\(/, '').replace(/\)\\b$/, '');
    // console.log(`new_pattern: `,new_pattern);
    
    let regex_elementsArray = new_pattern.split('|');
    regex_elementsArray = regex_elementsArray.map((element) => element.trim());
    const regexArrayInitialLength = regex_elementsArray.length;


    // console.log(`regex_elementsArray: `,regex_elementsArray);

    let index = regex_elementsArray.indexOf(newPhrase);
    if (index === -1 && action === 'add') {
      regex_elementsArray.push(newPhrase);
    }
    else if (index !== -1  && action === 'remove') {
      regex_elementsArray.splice(index, 1); // Remove 1 element at the found index
    }
    console.log(`index: ${index} regex_elementsArray: `,regex_elementsArray);

    let newRegex;
    if (regex_elementsArray.length !== regexArrayInitialLength)
    {
      newRegex = '\\b(';
      for (let i = 0; i < regex_elementsArray.length; i++) {
          if (patternIsUrl)
          {
            let temp = (regex_elementsArray[i]).replace(/\./g, '\\.');
            newRegex += temp.replace(/https:\/\//g, 'https:\\/\\/') + '|';
          }
          else newRegex +=`${regex_elementsArray[i]} |`;
      }
      newRegex = newRegex.slice(0,-1)  + ')\\b';
       
    } else 
    {
      console.log(` Case of ${regex_elementsArray.length} being equal regexArrayInitialLength: ${regexArrayInitialLength}`);
      newRegex = null;
    }

    // console.log(`newRegex: `,newRegex);
    return newRegex;
}
//#endregion


//#region action: add | remove 
const amendArrayElements = (_givenArray=[1,2,3], action="add", _newElement=4) => {
    
    let givenArray = _givenArray, newElement = Number(_newElement);
    console.log(`amendArrayElements _givenArray:`,_givenArray);

    if ((action !== 'add' && action !== 'remove') || !newElement) return givenArray;

    if (givenArray.length > 0)
    {
      let index = givenArray.indexOf(newElement);
      if (index === -1 && action === 'add') {
        givenArray.push(newElement);
      }
      else if (index !== -1  && action === 'remove') {
        givenArray.splice(index, 1); // Remove 1 element at the found index
      }
    }
    else if (action === 'add') givenArray.push(newElement);

    console.log(`amendArrayElements givenArray:`,givenArray);
    return givenArray;
}
//#endregion


//#region For all actions below: add | remove 
// const amendWebhookElements = async (webhook_id, webhookName, targetUrl, 
const amendWebhookElements = async ( 
  action_cast_created_parent_author_fids="add", _cast_created_parent_author_fids=620429, 
  action_cast_created_mentioned_fids="add",     _cast_created_mentioned_fids=620429, 

  actionRegexText="add",                        _cast_created_text="Beautiful Day", 
  actionRegexUrl="add",                         _cast_created_parent_embeds="https://www.test101.com",

  action_follow_created_target_fids="add",      _follow_created_target_fids=620430, 
  action_follow_deleted_target_fids="add",      _follow_deleted_target_fids=620430, 
  action_reaction_created_target_fids="add",    _reaction_created_target_fids=620430, 
  action_reaction_deleted_target_fids="add",   _reaction_deleted__target_fids=620430
  ) => {

  const webhookjJson = await fetchWebhookData(webhook_id);
  const webhookData = webhookjJson.webhook;
  const filters = webhookData.subscription.filters;
  console.log(`webhookData: `,webhookData);
  console.log(`RECEIVED filters: `,filters);


  let cast_created = filters["cast.created"], follow_created = filters["follow.created"], follow_deleted = filters["follow.deleted"], 
  reaction_created = filters["follow.created"], reaction_deleted = filters["reaction.deleted"];

  let user_updated = filters["user.updated"];
  
  let cast_created_parent_author_fids = {};
  if (action_cast_created_parent_author_fids!=="")
  {
    if (!Object.keys(filters["cast.created"]).includes("parent_author_fids")) filters["cast.created"]["parent_author_fids"] = [];
    cast_created_parent_author_fids = filters["cast.created"]["parent_author_fids"];
    cast_created_parent_author_fids = amendArrayElements( cast_created_parent_author_fids, action_cast_created_parent_author_fids, _cast_created_parent_author_fids);
    Object.assign(cast_created, {"parent_author_fids": cast_created_parent_author_fids});
  }

  let cast_created_mentioned_fids = {};
  if (action_cast_created_mentioned_fids!=="")
  {
    if (!Object.keys(filters["cast.created"]).includes("mentioned_fids")) filters["cast.created"]["mentioned_fids"] = [];
    cast_created_mentioned_fids = filters["cast.created"]["mentioned_fids"];
    cast_created_mentioned_fids = amendArrayElements( cast_created_mentioned_fids, action_cast_created_mentioned_fids, _cast_created_mentioned_fids);
    Object.assign(cast_created, {"mentioned_fids": cast_created_mentioned_fids});
  }

  let cast_created_text = {};
  if (actionRegexText!=="")
  {
    if (!Object.keys(filters["cast.created"]).includes("text")) filters["cast.created"]["text"] = "";
    cast_created_text = filters["cast.created"]["text"];  //'\\b(Wonderful weather|Amazing day)\\b'
    cast_created_text        = amendRegex(false, actionRegexText, cast_created_text         , _cast_created_text);
    Object.assign(cast_created, {"text": cast_created_text});
  }

  let cast_created_parent_embeds = {};
  if (actionRegexUrl!=="")
  {
    if (!Object.keys(filters["cast.created"]).includes("embeds")) filters["cast.created"]["embeds"] = "";
    cast_created_parent_embeds = filters["cast.created"]["embeds"]; //'(https:\\/\\/www\\.example\\.com|https:\\/\\/www\\.test\\.com)'
    cast_created_parent_embeds = amendRegex(true,  actionRegexUrl , cast_created_parent_embeds, _cast_created_parent_embeds);
    Object.assign(cast_created, {"embeds": cast_created_parent_embeds});
  }

  let follow_created_target_fids = {};
  if (action_follow_created_target_fids!=="")
  {
    if (!Object.keys(filters["follow.created"]).includes("target_fids")) filters["follow.created"]["target_fids"] = [];
    follow_created_target_fids = filters["follow.created"]["target_fids"];
    follow_created_target_fids = amendArrayElements( follow_created_target_fids, action_follow_created_target_fids, _follow_created_target_fids);
    Object.assign(follow_created, {"target_fids": follow_created_target_fids});
  };

  let follow_deleted_target_fids  = {};
  if (action_follow_deleted_target_fids!=="")
  {
    if (!Object.keys(filters["follow.deleted"]).includes("target_fids")) filters["follow.deleted"]["target_fids"] = [];
    follow_deleted_target_fids = filters["follow.deleted"]["target_fids"];
    follow_deleted_target_fids = amendArrayElements( follow_deleted_target_fids, action_follow_deleted_target_fids, _follow_deleted_target_fids);
    Object.assign(follow_deleted, {"target_fids": follow_deleted_target_fids});
  }

  let reaction_created_target_fids = {};
  if (action_reaction_created_target_fids!=="")
  {
    if (!Object.keys(filters["reaction.created"]).includes("target_fids")) filters["reaction.created"]["target_fids"] = [];
    reaction_created_target_fids = filters["reaction.created"]["target_fids"];
    reaction_created_target_fids = amendArrayElements( reaction_created_target_fids, action_reaction_created_target_fids, _reaction_created_target_fids);
    Object.assign(reaction_created, {"target_fids": reaction_created_target_fids});
  }

  let reaction_deleted__target_fids = {};
  if (action_reaction_deleted_target_fids!=="")
  {
    if (!Object.keys(filters["reaction.deleted"]).includes("target_fids")) filters["reaction.deleted"]["target_fids"] = [];
    reaction_deleted__target_fids = filters["reaction.deleted"]["target_fids"];
    reaction_deleted__target_fids = amendArrayElements( reaction_deleted__target_fids, action_reaction_deleted_target_fids, _reaction_deleted__target_fids);
    Object.assign(reaction_deleted, {"target_fids": reaction_deleted__target_fids});
  }


  let newFilters = {
    "user.updated": user_updated,
    "cast.created": cast_created,
    "follow.created": follow_created,
    "follow.deleted": follow_deleted,
    "reaction.created": reaction_created,
    "reaction.deleted": reaction_deleted
  }
  console.log(` *** amendWebhookElements *** OUTGOING newFilters: `,newFilters);


  //Send the updated filters to the server
  const url = `${base}v2/farcaster/webhook`;
  const options = {
    method: 'PUT',
    headers: {
      accept: 'application/json',
      api_key: apiKey,
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      subscription: newFilters,                     
      name: webhookName,
      url: targetUrl,
      webhook_id: webhook_id
    })
  };


  const res = await fetch(url, options);
  if (!res.ok) {
	console.error('amendWebhookElements |> Network response was not ok ' + res.statusText);
  }
  const json = await res.json();
  console.log(`amendWebhookElements Response from updating webhook res.statusText: `,res.statusText);

  return json;

	//   fetch(url, options)
	//   .then(res => res.json())
	//   .then(json => {
	//     console.log(`amendWebhookElements json: `,json);
	//   })
	//   .catch(err => console.error('amendWebhookElements error:' + err));

}
//#endregion


//#endregion ******************


/* EXAMPLE CALL

  await amendWebhookElements (
  "", "620429", 
  "add",    "620429", 

  "",    "Beautiful Day", 
  "",    "https://www.test101.com",

  "",     "620430", 
  "",     "620430", 
  "",     "620430", 
  "",     "620430"
  )

*/


export {
    setup_webhooks,
	amendWebhookElements,
}