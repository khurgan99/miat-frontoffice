import React from "react";
import { Link } from "react-router-dom";
export default function NotFound() {
    return (
        <div className="bg-cover flex min-h-screen flex-col pt-16 pb-12 bg-login_pattern">
            <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
                <div className="flex flex-shrink-0 justify-center">
                    <Link to={"/"} className="inline-flex">
                        <span className="sr-only">Your Company</span>
                        <img
                            className="h-48 w-auto"
                            src="/logos/main-logo/android-chrome-192x192.png"
                            alt=""
                        />
                    </Link>
                </div>
                <div className="py-16">
                    <div className="text-center">
                        <p className="text-base font-semibold text-primary-500">404</p>
                        <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found.</h1>
                        <p className="mt-2 text-base text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>
                        <div className="mt-6">
                            <Link to={"/"} className="text-base font-medium text-primary-500 hover:text-primary-500">
                                Go back home
                                <span aria-hidden="true"> &rarr;</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
