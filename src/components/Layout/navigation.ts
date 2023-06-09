import {
  BriefcaseIcon,
  ChatBubbleBottomCenterIcon,
  UserGroupIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

export const navigation = [
  { name: 'My hive', href: '/dashboard', icon: UserGroupIcon, current: false },
  { name: 'My profile', href: '/dashboard/profile/edit', icon: UserIcon, current: false },
  { name: 'Works', href: '/dashboard/services', icon: BriefcaseIcon, current: false },
  { name: 'Chat', href: '/dashboard/messaging', icon: ChatBubbleBottomCenterIcon, current: false },
];
