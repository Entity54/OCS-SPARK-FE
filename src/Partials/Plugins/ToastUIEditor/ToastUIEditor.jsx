import React, { useEffect } from 'react'
import CardAction from '../../Widgets/CardAction/CardAction';

import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Link } from 'react-router-dom';

const ToastUIEditor = () => {

useEffect(() => {
    const editor = new Editor({
        el: document.querySelector('#ToastUiEditor'),
        previewStyle: 'tab',
        height: '300px',
    });

    return () => {
        editor.getMarkdown();
    };
    }, []);

    const editorCode = `
    import Editor from '@toast-ui/editor';
    import '@toast-ui/editor/dist/toastui-editor.css'; 

    useEffect(() => {
        const editor = new Editor({
            el: document.querySelector('#ToastUiEditor'),
            previewStyle: 'tab',
            height: '300px',
        });
    
        return () => {
            editor.getMarkdown();
        };
    }, []);

    return (
        <div id="ToastUiEditor"></div>
    )
  `;

return (
        <div className="px-4 py-3 page-body">
			<div className="card border-0 bg-transparent">
				<div className="card-header mb-4 border-bottom px-0">
					<h5 className="card-title mb-0 text-primary">Toast ui editor</h5>
					<div className="dropdown card-action">
                        <CardAction/>
					</div>
				</div>
				<div className="card-body p-0">
                    <div className="row g-xl-4 g-3">
                        <div className="col-12">
							<p className="lead">TOAST UI Editor can be used by using the package manager or downloading the source directly. However, we highly recommend using the package manager.</p>
                            <div className="rounded-4 " data-lang="html">
                                <pre className='h6 language-html text-primary'><code>{editorCode}</code></pre>
                            </div>
                        </div>
                        <div className="col-12">
      						<div id="ToastUiEditor"></div>
                        </div>
                    </div>
				</div>
				<div className="card-footer px-0 mt-4">
					<div className="btn-group d-flex">
						<Link className="btn btn-lg btn-outline-secondary text-start" to="/docs/toast-calendar">
							<span>
								<svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M5 12l14 0"></path>
									<path d="M5 12l6 6"></path>
									<path d="M5 12l6 -6"></path>
								</svg>
								<span>Previous</span>
							</span>
							<h5 className="mb-0 ps-4">Toast calendar</h5>
						</Link>
						<Link className="btn btn-lg btn-outline-secondary text-end" to="/docs/accordion">
							<span>
								<span>Next</span>
								<svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M5 12l14 0"></path>
									<path d="M13 18l6 -6"></path>
									<path d="M13 6l6 6"></path>
								</svg>
							</span>
							<h5 className="mb-0 pe-4">Accordion</h5>
						</Link>
					</div>
				</div>
			</div>
		</div>
    )
}

export default ToastUIEditor