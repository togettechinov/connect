const searchData = {
  users: [
    {
      id: 7,
      username: 'ghalib',
      firstname: 'Mirza',
      surname: 'Ghalib',
      mutualFollowersCount: 1,
    },
    {
      id: 8,
      username: 'coldplay',
      firstname: 'cold',
      surname: 'play',
      mutualFollowersCount: 0,
    },
  ],
  usergroups: [
    {
      group_id: 11,
      name: 'a usergroupss',
      membersCount: 6,
      mutualMembersCount: 1,
    },
  ],
  hashtags: [
    {
      hashtag: '#nice',
    },
    {
      hashtag: '#travel',
    },
  ],
}

const filterUsers = value =>
  searchData.users.filter(user => user.username.includes(value))

const filterGroups = value =>
  searchData.usergroups.filter(user => user.name.includes(value))

const filterHashtags = value =>
  searchData.hashtags.filter(user => user.hashtag.includes(value))

export const filterSearch = value => {
  return {
    users: filterUsers(value),
    usergroups: filterGroups(value),
    hashtags: filterHashtags(value),
  }
}

export default searchData
