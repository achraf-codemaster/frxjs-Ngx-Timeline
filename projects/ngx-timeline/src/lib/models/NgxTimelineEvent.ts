/**
 * Event to be provided from outside the timeline
 */
export interface NgxTimelineEvent<T = any> {
  timestamp?: Date;
  title?: string;
  description?: string;
  data?: T;
  id?: any;
  itemPosition?: NgxTimelineItemPosition;
}

export interface NgxTimelinePeriodInfo {
  periodKey?: string;
  year?: number;
  month?: number;
  day?: number;
  firstDate?: any;
}

/**
 * Item used inside the timeline
 */
export interface NgxTimelineItem {
  type?: string;
  position?: NgxTimelineItemPosition.ON_LEFT | NgxTimelineItemPosition.ON_RIGHT;
  periodInfo?: NgxTimelinePeriodInfo;
  eventInfo?: NgxTimelineEvent;
}

export enum NgxTimelineItemPosition {
  ON_LEFT = 'ON_LEFT',
  ON_RIGHT = 'ON_RIGHT'
}
