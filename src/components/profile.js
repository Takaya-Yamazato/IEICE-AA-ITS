import React from 'react'
import { getUser } from '../services/auth'

const Profile = () => (
  <>
    &nbsp;&nbsp;&nbsp;&nbsp;Welcome {getUser().name} ({getUser().email})
  </>
)

export default Profile
