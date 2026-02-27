"use client";

import PrivateRoute from "../components/organisms/guards/PrivateRoute";
import UsersTemplate from "../components/templates/users/UsersTemplate";

export default function UsersPage() {
    return (
        <PrivateRoute>
            <UsersTemplate/>
        </PrivateRoute>
    );
}