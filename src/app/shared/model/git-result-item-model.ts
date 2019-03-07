import {GitResultItemOwnerModel} from './git-result-item-owner-model';
import {GitResultItemLicenseModel} from './git-result-item-license-model';

export class GitResultItemModel {


  private _id: number;
  private _node_id: string;
  private _name: string;
  private _full_name: string;
  private _private: boolean;
  private _owner: GitResultItemOwnerModel;
  private _html_url: string;
  private _description: string;
  private _fork: boolean;
  private _url: string;
  private _forks_url: string;
  private _keys_url: string;
  private _collaborators_url: string;
  private _teams_url: string;
  private _hooks_url: string;
  private _issue_events_url: string;
  private _events_url: string;
  private _assignees_url: string;
  private _branches_url: string;
  private _tags_url: string;
  private _blobs_url: string;
  private _git_tags_url: string;
  private _git_refs_url: string;
  private _trees_url: string;
  private _statuses_url: string;
  private _languages_url: string;
  private _stargazers_url: string;
  private _contributors_url: string;
  private _subscribers_url: string;
  private _subscription_url: string;
  private _commits_url: string;
  private _git_commits_url: string;
  private _comments_url: string;
  private _issue_comment_url: string;
  private _contents_url: string;
  private _compare_url: string;
  private _merges_url: string;
  private _archive_url: string;
  private _downloads_url: string;
  private _issues_url: string;
  private _pulls_url: string;
  private _milestones_url: string;
  private _notifications_url: string;
  private _labels_url: string;
  private _releases_url: string;
  private _deployments_url: string;
  private _created_at: Date;
  private _updated_at: Date;
  private _pushed_at: Date;
  private _git_url: string;
  private _ssh_url: string;
  private _clone_url: string;
  private _svn_url: string;
  private _homepage: string;
  private _size: number;
  private _stargazers_count: number;
  private _watchers_count: number;
  private _language: string;
  private _has_issues: boolean;
  private _has_projects: boolean;
  private _has_downloads: boolean;
  private _has_wiki: boolean;
  private _has_pages: boolean;
  private _forks_count: number;
  private _mirror_url: string;
  private _archived: boolean;
  private _open_issues_count: number;
  private _license: GitResultItemLicenseModel;
  private _forks: number;
  private _open_issues: number;
  private _watchers: number;
  private _default_branch: string;
  private _score: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get node_id(): string {
    return this._node_id;
  }

  set node_id(value: string) {
    this._node_id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get full_name(): string {
    return this._full_name;
  }

  set full_name(value: string) {
    this._full_name = value;
  }

  get private(): boolean {
    return this._private;
  }

  set private(value: boolean) {
    this._private = value;
  }

  get owner(): GitResultItemOwnerModel {
    return this._owner;
  }

  set owner(value: GitResultItemOwnerModel) {
    this._owner = value;
  }

  get html_url(): string {
    return this._html_url;
  }

  set html_url(value: string) {
    this._html_url = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get fork(): boolean {
    return this._fork;
  }

  set fork(value: boolean) {
    this._fork = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get forks_url(): string {
    return this._forks_url;
  }

  set forks_url(value: string) {
    this._forks_url = value;
  }

  get keys_url(): string {
    return this._keys_url;
  }

  set keys_url(value: string) {
    this._keys_url = value;
  }

  get collaborators_url(): string {
    return this._collaborators_url;
  }

  set collaborators_url(value: string) {
    this._collaborators_url = value;
  }

  get teams_url(): string {
    return this._teams_url;
  }

  set teams_url(value: string) {
    this._teams_url = value;
  }

  get hooks_url(): string {
    return this._hooks_url;
  }

  set hooks_url(value: string) {
    this._hooks_url = value;
  }

  get issue_events_url(): string {
    return this._issue_events_url;
  }

  set issue_events_url(value: string) {
    this._issue_events_url = value;
  }

  get events_url(): string {
    return this._events_url;
  }

  set events_url(value: string) {
    this._events_url = value;
  }

  get assignees_url(): string {
    return this._assignees_url;
  }

  set assignees_url(value: string) {
    this._assignees_url = value;
  }

  get branches_url(): string {
    return this._branches_url;
  }

  set branches_url(value: string) {
    this._branches_url = value;
  }

  get tags_url(): string {
    return this._tags_url;
  }

  set tags_url(value: string) {
    this._tags_url = value;
  }

  get blobs_url(): string {
    return this._blobs_url;
  }

  set blobs_url(value: string) {
    this._blobs_url = value;
  }

  get git_tags_url(): string {
    return this._git_tags_url;
  }

  set git_tags_url(value: string) {
    this._git_tags_url = value;
  }

  get git_refs_url(): string {
    return this._git_refs_url;
  }

  set git_refs_url(value: string) {
    this._git_refs_url = value;
  }

  get trees_url(): string {
    return this._trees_url;
  }

  set trees_url(value: string) {
    this._trees_url = value;
  }

  get statuses_url(): string {
    return this._statuses_url;
  }

  set statuses_url(value: string) {
    this._statuses_url = value;
  }

  get languages_url(): string {
    return this._languages_url;
  }

  set languages_url(value: string) {
    this._languages_url = value;
  }

  get stargazers_url(): string {
    return this._stargazers_url;
  }

  set stargazers_url(value: string) {
    this._stargazers_url = value;
  }

  get contributors_url(): string {
    return this._contributors_url;
  }

  set contributors_url(value: string) {
    this._contributors_url = value;
  }

  get subscribers_url(): string {
    return this._subscribers_url;
  }

  set subscribers_url(value: string) {
    this._subscribers_url = value;
  }

  get subscription_url(): string {
    return this._subscription_url;
  }

  set subscription_url(value: string) {
    this._subscription_url = value;
  }

  get commits_url(): string {
    return this._commits_url;
  }

  set commits_url(value: string) {
    this._commits_url = value;
  }

  get git_commits_url(): string {
    return this._git_commits_url;
  }

  set git_commits_url(value: string) {
    this._git_commits_url = value;
  }

  get comments_url(): string {
    return this._comments_url;
  }

  set comments_url(value: string) {
    this._comments_url = value;
  }

  get issue_comment_url(): string {
    return this._issue_comment_url;
  }

  set issue_comment_url(value: string) {
    this._issue_comment_url = value;
  }

  get contents_url(): string {
    return this._contents_url;
  }

  set contents_url(value: string) {
    this._contents_url = value;
  }

  get compare_url(): string {
    return this._compare_url;
  }

  set compare_url(value: string) {
    this._compare_url = value;
  }

  get merges_url(): string {
    return this._merges_url;
  }

  set merges_url(value: string) {
    this._merges_url = value;
  }

  get archive_url(): string {
    return this._archive_url;
  }

  set archive_url(value: string) {
    this._archive_url = value;
  }

  get downloads_url(): string {
    return this._downloads_url;
  }

  set downloads_url(value: string) {
    this._downloads_url = value;
  }

  get issues_url(): string {
    return this._issues_url;
  }

  set issues_url(value: string) {
    this._issues_url = value;
  }

  get pulls_url(): string {
    return this._pulls_url;
  }

  set pulls_url(value: string) {
    this._pulls_url = value;
  }

  get milestones_url(): string {
    return this._milestones_url;
  }

  set milestones_url(value: string) {
    this._milestones_url = value;
  }

  get notifications_url(): string {
    return this._notifications_url;
  }

  set notifications_url(value: string) {
    this._notifications_url = value;
  }

  get labels_url(): string {
    return this._labels_url;
  }

  set labels_url(value: string) {
    this._labels_url = value;
  }

  get releases_url(): string {
    return this._releases_url;
  }

  set releases_url(value: string) {
    this._releases_url = value;
  }

  get deployments_url(): string {
    return this._deployments_url;
  }

  set deployments_url(value: string) {
    this._deployments_url = value;
  }

  get created_at(): Date {
    return this._created_at;
  }

  set created_at(value: Date) {
    this._created_at = value;
  }

  get updated_at(): Date {
    return this._updated_at;
  }

  set updated_at(value: Date) {
    this._updated_at = value;
  }

  get pushed_at(): Date {
    return this._pushed_at;
  }

  set pushed_at(value: Date) {
    this._pushed_at = value;
  }

  get git_url(): string {
    return this._git_url;
  }

  set git_url(value: string) {
    this._git_url = value;
  }

  get ssh_url(): string {
    return this._ssh_url;
  }

  set ssh_url(value: string) {
    this._ssh_url = value;
  }

  get clone_url(): string {
    return this._clone_url;
  }

  set clone_url(value: string) {
    this._clone_url = value;
  }

  get svn_url(): string {
    return this._svn_url;
  }

  set svn_url(value: string) {
    this._svn_url = value;
  }

  get homepage(): string {
    return this._homepage;
  }

  set homepage(value: string) {
    this._homepage = value;
  }

  get size(): number {
    return this._size;
  }

  set size(value: number) {
    this._size = value;
  }

  get stargazers_count(): number {
    return this._stargazers_count;
  }

  set stargazers_count(value: number) {
    this._stargazers_count = value;
  }

  get watchers_count(): number {
    return this._watchers_count;
  }

  set watchers_count(value: number) {
    this._watchers_count = value;
  }

  get language(): string {
    return this._language;
  }

  set language(value: string) {
    this._language = value;
  }

  get has_issues(): boolean {
    return this._has_issues;
  }

  set has_issues(value: boolean) {
    this._has_issues = value;
  }

  get has_projects(): boolean {
    return this._has_projects;
  }

  set has_projects(value: boolean) {
    this._has_projects = value;
  }

  get has_downloads(): boolean {
    return this._has_downloads;
  }

  set has_downloads(value: boolean) {
    this._has_downloads = value;
  }

  get has_wiki(): boolean {
    return this._has_wiki;
  }

  set has_wiki(value: boolean) {
    this._has_wiki = value;
  }

  get has_pages(): boolean {
    return this._has_pages;
  }

  set has_pages(value: boolean) {
    this._has_pages = value;
  }

  get forks_count(): number {
    return this._forks_count;
  }

  set forks_count(value: number) {
    this._forks_count = value;
  }

  get mirror_url(): string {
    return this._mirror_url;
  }

  set mirror_url(value: string) {
    this._mirror_url = value;
  }

  get archived(): boolean {
    return this._archived;
  }

  set archived(value: boolean) {
    this._archived = value;
  }

  get open_issues_count(): number {
    return this._open_issues_count;
  }

  set open_issues_count(value: number) {
    this._open_issues_count = value;
  }

  get license(): GitResultItemLicenseModel {
    return this._license;
  }

  set license(value: GitResultItemLicenseModel) {
    this._license = value;
  }

  get forks(): number {
    return this._forks;
  }

  set forks(value: number) {
    this._forks = value;
  }

  get open_issues(): number {
    return this._open_issues;
  }

  set open_issues(value: number) {
    this._open_issues = value;
  }

  get watchers(): number {
    return this._watchers;
  }

  set watchers(value: number) {
    this._watchers = value;
  }

  get default_branch(): string {
    return this._default_branch;
  }

  set default_branch(value: string) {
    this._default_branch = value;
  }

  get score(): number {
    return this._score;
  }

  set score(value: number) {
    this._score = value;
  }
}
