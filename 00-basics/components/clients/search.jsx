"use client";

import React, {useState} from 'react';
import {BiSearchAlt2} from 'react-icons/bi';
function Search() {
    const [searchQuery, setSearchQuery] = useState("");
    console.log(searchQuery)
    return (
        <label className="relative block mt-4">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg className="h-5 w-5 fill-black" viewBox="0 0 20 20"><BiSearchAlt2/></svg>
            </span>
            <input
                className="placeholder:text-sm block bg-neutral-900 w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                placeholder="Search for anything..." type="text" name="search"
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </label>
    );
}

export default Search;