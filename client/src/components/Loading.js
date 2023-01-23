import React from "react";
export default function Loading() {
    return (
        <div className="text-center">
            <div className = "spinner-border" role ="status" style={{ height: '100px', width: '100px', marginTop: '5%', marginBottom: '5%' }}>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}