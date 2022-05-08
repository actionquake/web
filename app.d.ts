interface Asset {
    id: number;
    platform: string | null;
    platformIcon: IconDefinition;
    url: string;
    name: string;
    content_type: string;
    state: string;
    size: number;
    created_at: Date;
    updated_at: Date;
}

interface Release {
    id: number;
    url: string;
    version: string;
    name: string;
    notes: string;
    draft: boolean;
    prerelease: boolean;
    assets?: Array<Asset>;
    created_at: Date;
    published_at: Date;
}
