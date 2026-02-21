export interface MovieProps {
  entity_id: UUID;
  entity_name: string;
  entity_categoryid: MovieCategory;
  entity_imageurl: string;
  entity_colorId: string;
  entity_synopsis: string;
  entity_brand?: string;
  entity_releaseyear?: number;
  entity_runtimeminutes?: number;
  entity_ratingmpaa?: string;
  entity_imdbrating?: number;
  entity_director?: string;
  entity_primarycast?: string;
  entity_language?: string;
  entity_country?: string;
  entity_franchise?: string;
  entity_streamingavailable?: string;
  entity_popularityscore?: number;
  entity_custom1?: string;
}

export type MovieCategory =
  | "Sci-Fi"
  | "Horror"
  | "Romance"
  | "Action"
  | "Comedy"
  | "Animation";

export interface ReviewProps {
  review_id: UUID;
  entity_id: UUID;
  user_name: string;
  rating_score: number;
  review_content: string;
  sentiment_label?: string;
  is_spoiler?: boolean;
  helpful_count?: number;
  review_date?: Date;
}
