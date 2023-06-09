import {
  BriefcaseIcon,
  ChatBubbleBottomCenterIcon,
  UserGroupIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

export const navigation = [
  { name: 'My hive', href: '/hive', icon: UserGroupIcon, current: false },
  { name: 'My profile', href: '/profile/edit', icon: UserIcon, current: false },
  { name: 'Works', href: '/services', icon: BriefcaseIcon, current: false },
  { name: 'Chat', href: '/messaging', icon: ChatBubbleBottomCenterIcon, current: false },
];
