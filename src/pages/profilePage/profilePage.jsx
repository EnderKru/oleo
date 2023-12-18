import "../profilePage/profilePage.css"
import { ProfileHeader } from "./profile-header/profile-header"
import { ProfileBody } from "./profile-body/prof-body"


export function ProfilePage() {
  return (
    <div>
      <div>
        <ProfileHeader/>
      </div>
      <div>
        <ProfileBody />
      </div>
    </div>
  )
}
