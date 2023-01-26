import { IssueTypes, RegexIssue } from '../../types';

const issue: RegexIssue = {
  regexOrAST: 'Regex',
  type: IssueTypes.GAS,
  title: 'For Operations that will not overflow, you could use unchecked',
  // NOTE: We don't match for `-` and `/` as it will cause it to pull all imports
  regex: /([a-z,A-Z,0-9]*\+)|([a-z,A-Z,0-9]*\*)/g,
};

export default issue;
