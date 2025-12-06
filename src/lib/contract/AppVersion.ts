export interface AppVersion {
	commit: {
		sha: string;
		short: string;
	};
	tag: string;
	version: string;
	branch: string;
	timestamp: string;
}
