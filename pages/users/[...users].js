import { useRouter } from "next/router";
import React from "react";

function someUser() {
  const router = useRouter();
  const {users} = router.query

if(users){
    if (users.length === 2) {
        return (
          <diV>
            You are viewing features {users[0]} and concept {users[1]}
          </diV>
        );
      } else if (users.length === 3) {
        return (
          <div>
            You are viewing features {users[0]} and concept {users[1]} and
            subconcept {users[2]}
          </div>
        );
      }
} 
}

export default someUser;
