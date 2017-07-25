export function getCardType(str) {
  switch (str) {
    case 'good':
      return '精';
    case 'top':
      return '顶';
    case 'share':
      return '分享';
    case 'ask':
      return '问答';
    case 'job':
      return '招聘';
    default:
      return 'node';
  }
};

