import {SalesGroup} from '../app/state/sales-group/sales-group.model';

export const salesGroupMasterData: SalesGroup[] = [
  {
    id: 0, name: '0er Sales Group', children: [], assignmentStatus: {
      hasCommonConflict: true,
      isCommonSelected: true,
      hasPriorityConflict: false,
      isPrioritySelected: false
    }
  },
  {
    id: 1, name: '1er Sales Group', children: [], assignmentStatus: {
      hasCommonConflict: false,
      isCommonSelected: false,
      hasPriorityConflict: true,
      isPrioritySelected: false
    }
  },
  {
    id: 2, name: '2er Sales Group', children: [], assignmentStatus: {
      hasCommonConflict: false,
      isCommonSelected: true,
      hasPriorityConflict: false,
      isPrioritySelected: false
    }
  },
  {
    id: 3, name: '3er Sales Group', children: [], assignmentStatus: {
      hasCommonConflict: false,
      isCommonSelected: true,
      hasPriorityConflict: false,
      isPrioritySelected: false
    }
  },
  {
    id: 4, name: '4er Sales Group', parentId: 0, children: [], assignmentStatus: {
      hasCommonConflict: false,
      isCommonSelected: false,
      hasPriorityConflict: false,
      isPrioritySelected: true
    }
  },
  {
    id: 5, name: '5er Sales Group', parentId: 0, children: [], assignmentStatus: {
      hasCommonConflict: true,
      isCommonSelected: false,
      hasPriorityConflict: false,
      isPrioritySelected: true
    }
  },
  {
    id: 6, name: '6er Sales Group', parentId: 0, children: [], assignmentStatus: {
      hasCommonConflict: false,
      isCommonSelected: false,
      hasPriorityConflict: false,
      isPrioritySelected: false
    }
  },
  {
    id: 7, name: '7er Sales Group', parentId: 1, children: [], assignmentStatus: {
      hasCommonConflict: false,
      isCommonSelected: false,
      hasPriorityConflict: false,
      isPrioritySelected: false
    }
  },
  {
    id: 8, name: '8er Sales Group', parentId: 2, children: [], assignmentStatus: {
      hasCommonConflict: false,
      isCommonSelected: false,
      hasPriorityConflict: false,
      isPrioritySelected: false
    }
  },
  {
    id: 9, name: '9er Sales Group', parentId: 4, children: [], assignmentStatus: {
      hasCommonConflict: false,
      isCommonSelected: false,
      hasPriorityConflict: false,
      isPrioritySelected: false
    }
  },
  {
    id: 10, name: '10er Sales Group', parentId: 4, children: [], assignmentStatus: {
      hasCommonConflict: false,
      isCommonSelected: false,
      hasPriorityConflict: false,
      isPrioritySelected: false
    }
  },
  {
    id: 11, name: '11er Sales Group', parentId: 4, children: [], assignmentStatus: {
      hasCommonConflict: false,
      isCommonSelected: false,
      hasPriorityConflict: false,
      isPrioritySelected: false
    }
  },
];


export function createSalesGroupAssignments(): number[] {
  const salesGroupIds: number[] = [];
  const maxAmount = Math.floor(Math.random() * 12);
  for (let i = 0; i < maxAmount; i++) {
    const id = Math.floor(Math.random() * 12);
    if (salesGroupIds.indexOf(id) === -1) {
      salesGroupIds.push(id);
    }
  }

  return salesGroupIds;
}
