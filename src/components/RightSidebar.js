import React from 'react';

// Pre-resolve all SVGs using new URL(..., import.meta.url).href
const bugIcon = new URL('../assets/notifications1.svg', import.meta.url).href;
const personIcon = new URL('../assets/notifications2.svg', import.meta.url).href;
const documentIcon = new URL('../assets/notifications3.svg', import.meta.url).href;
const trashIcon = new URL('../assets/notifications4.svg', import.meta.url).href;

const activities1 = new URL('../assets/activities-1.svg', import.meta.url).href;
const activities2 = new URL('../assets/activities-2.svg', import.meta.url).href;
const activities3 = new URL('../assets/activities-3.svg', import.meta.url).href;
const activities4 = new URL('../assets/activities-4.svg', import.meta.url).href;
const activities5 = new URL('../assets/activities-5.svg', import.meta.url).href;

const contact1 = new URL('../assets/contacts-1.svg', import.meta.url).href;
const contact2 = new URL('../assets/contacts-2.svg', import.meta.url).href;
const contact3 = new URL('../assets/contacts-3.svg', import.meta.url).href;
const contact4 = new URL('../assets/contacts-4.svg', import.meta.url).href;
const contact5 = new URL('../assets/contacts-5.svg', import.meta.url).href;
const contact6 = new URL('../assets/contacts-6.svg', import.meta.url).href;

const iconsMap = {
  bug: bugIcon,
  person: personIcon,
  document: documentIcon,
  trash: trashIcon,
  'activities-1': activities1,
  'activities-2': activities2,
  'activities-3': activities3,
  'activities-4': activities4,
  'activities-5': activities5,
};

const contactsMap = {
  'contacts-1': contact1,
  'contacts-2': contact2,
  'contacts-3': contact3,
  'contacts-4': contact4,
  'contacts-5': contact5,
  'contacts-6': contact6,
};

const RightSidebar = () => {
  const notifications = [
    { id: 1, text: 'You have a bug that needs...', time: 'Just now', icon: 'bug' },
    { id: 2, text: 'New user registered', time: '59 minutes ago', icon: 'person' },
    { id: 3, text: 'You have a bug that needs...', time: '12 hours ago', icon: 'bug' },
    { id: 4, text: 'Andi Lone subscribed to you', time: 'Today, 11:59 AM', icon: 'person' },
  ];

  const activities = [
    { id: 1, text: 'You have a bug that needs...', time: 'Just now', icon: 'activities-1' },
    { id: 2, text: 'Released a new version', time: '59 minutes ago', icon: 'activities-2' },
    { id: 3, text: 'Submitted a bug', time: '12 hours ago', icon: 'activities-3' },
    { id: 4, text: 'Modified A data in Page X', time: 'Today, 11:59 AM', icon: 'activities-4' },
    { id: 5, text: 'Deleted a page in Project X', time: 'Feb 2, 2023', icon: 'activities-5' },
  ];

  const contacts = [
    { id: 1, name: 'Natali Craig', avatar: 'contacts-1' },
    { id: 2, name: 'Drew Cano', avatar: 'contacts-2' },
    { id: 3, name: 'Orlando Diggs', avatar: 'contacts-3' },
    { id: 4, name: 'Andi Lane', avatar: 'contacts-4' },
    { id: 5, name: 'Kate Morrison', avatar: 'contacts-5' },
    { id: 6, name: 'Koray Okumus', avatar: 'contacts-6' },
  ];

  return (
    <div className="space-y-24">
      {/* Notifications */}
      <div className="bg-figma-card dark:bg-gray-800 rounded-12 shadow-figma-card p-24 border border-figma-border dark:border-gray-700">
        <h3 className="text-18 font-semibold text-figma-gray dark:text-white mb-16 font-inter">Notifications</h3>
        <div className="space-y-3">
          {notifications.map((n) => (
            <div key={n.id} className="flex items-start space-x-3">
              <div className="mt-1">
                <img src={iconsMap[n.icon]} alt={n.icon} className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="text-14 text-figma-gray dark:text-white font-inter">{n.text}</p>
                <p className="text-12 text-figma-gray-40 dark:text-gray-400 font-inter">{n.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activities */}
      <div className="bg-figma-card dark:bg-gray-800 rounded-12 shadow-figma-card p-24 border border-figma-border dark:border-gray-700">
        <h3 className="text-18 font-semibold text-figma-gray dark:text-white mb-16 font-inter">Activities</h3>
        <div className="space-y-3">
          {activities.map((a) => (
            <div key={a.id} className="flex items-start space-x-3">
              <div className="mt-1">
                <img src={iconsMap[a.icon]} alt={a.icon} className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="text-14 text-figma-gray dark:text-white font-inter">{a.text}</p>
                <p className="text-12 text-figma-gray-40 dark:text-gray-400 font-inter">{a.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contacts */}
      <div className="bg-figma-card dark:bg-gray-800 rounded-12 shadow-figma-card p-24 border border-figma-border dark:border-gray-700">
        <h3 className="text-18 font-semibold text-figma-gray dark:text-white mb-16 font-inter">Contacts</h3>
        <div className="space-y-3">
          {contacts.map((c) => (
            <div key={c.id} className="flex items-center space-x-3">
              <img src={contactsMap[c.avatar]} alt={c.name} className="w-6 h-6 rounded-full" />
              <span className="text-14 text-figma-gray dark:text-white font-inter">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
