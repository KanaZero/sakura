import React from 'react';

export function Appeals(){
    return (
        <div>
            <div className="justify">
                <div className="AppealTop">Submit your appeal below</div>
            </div>
            <div className="justify">
                <div className="AppealContentBorder">
                    <textarea placeholder="Type your appeal here..." className="AppealContent"></textarea>
                </div>
            </div>
            <div className="justify">
                <div className="AppealSend">Send</div>
            </div>
        </div>
    )
}