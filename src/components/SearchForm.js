import React, { useState } from 'react'

const SearchForm = ({searchText}) => {
    const [text, setText ] = useState('');
    const onSubmit = e => {
        e.preventDefault();
        searchText(text);
    }
    return (
        <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
            <form onSubmit={onSubmit} className="max-w-sm w-full">
                <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
                    <input type="text" placeholder="Search...." className="appearance-none bg-transparent border-none w-full rounded text-gray-900 mr-3 py-2 px-2 leading-tight outline:focus-none" onChange={e => setText(e.target.value)} />
                    <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-800 border-teal-500 hover:border-teal-800 text-sm border-4 text-white py-1 px-2 rounded" type="submit">Search</button>
                </div>
            </form>
        </div>
    )
}

export default SearchForm;