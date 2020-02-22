export interface SalesGroup {
  id: number;
  name: string;
  parentId?: number;
  children: SalesGroup[];
  assignmentStatus: SalesGroupAssignmentStatus;
}

interface SalesGroupAssignmentStatus {
  hasCommonConflict: boolean;
  isCommonSelected: boolean;
  hasPriorityConflict: boolean;
  isPrioritySelected: boolean;
}
