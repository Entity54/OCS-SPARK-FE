Placeholder

## Registering New Campaign

Visit /Campaigns/New Campaign

Fill

1. Title
2. Farcaster FID of Campaign owner (where all marketing material will be published)
3. Description
4. The Ethereum Address of the campaign this is bedefault the account signed in Smart Wallet
5. Budget - ETH you will transfer for this campaign
6. Start and End date
7. The points you want to allocate per infuencer action. This is subjective and depends on the Campaign Owner preferce. For example if he/she considers re-casting more important than like then could allocate 2 points for recasting and 1 for likes
8. Some Marketing assets such as a url that can be emded in a cast for extra points e.g. company website or a Tag Line e.g. "Yolo holidays"

Click Cancel to start again or Create Campaign to subit the campaign

> STAGE: A new campaign is subitted in the smart contract and is included in the Pending Campaigns

---

Server side

1. **checkPendingCampainStatus** to move a campaign from Pending to Active if reached startTime
2. **checkActiveCampainStatus** to move a campaign from Active to Expired if reached end time
3. **calculateDistributions** for each Expired Campaign to calculate weights of each infuencer based on his/her points so that we know how much funds they are eligible to receive
4. **checkExpiredCampainStatus** for Expired Campaigns when the previous step calculateDistributions is complete , move them to readyFroPaymentCampaignUIDs campaigns
5. **makePayments** for cmapaigns that are in readyFroPaymentCampaignUIDs
6. **checkReadyForPaymentStatus** to move campaign from Ready2Payment to Completed
   > When a campaign has paid funds then it will be of state Paid otherwise Void and the campaign owner can get his money back (minus paltform fees)

---
