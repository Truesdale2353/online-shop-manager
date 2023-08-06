import React, { useState } from 'react';
import styled from 'styled-components';
import { Table, TableHead, TableRow, TableCell, TableBody, Collapse, Typography, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const StyledTable = styled(Table)`
  min-width: 650px;
`;

const ExpandableTableRow = styled(TableRow)`
  &.Mui-expanded {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const ExpandIconCell = styled(TableCell)`
  cursor: pointer;
`;

const ExpandedDetailsCell = styled(TableCell)`
  padding: 0;
`;

const StatusSelect = styled(Select)`
  min-width: 120px;
`;

interface Item {
  id: number;
  name: string;
  size: string;
  color: string;
}

interface DeliveryRequest {
  id: number;
  address: string;
  phoneNumber: string;
  email: string;
  items: Item[];
  status: string;
}

interface DeliveryRequestsProps {
  deliveryRequests: DeliveryRequest[];
}

const DeliveryRequests: React.FC<DeliveryRequestsProps> = ({ deliveryRequests }) => {
  const [expandedRowIndex, setExpandedRowIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedRowIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleStatusChange = (event: SelectChangeEvent<unknown>, index: number) => {
    // Perform logic to update the status value for the corresponding delivery request
    console.log('New status:', event.target.value, 'for row index:', index);
  };

  return (
    <TableContainer>
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>ID</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {deliveryRequests.map((request, index) => (
            <React.Fragment key={request.id}>
              <ExpandableTableRow
                hover
                onClick={() => toggleExpand(index)}
                className={expandedRowIndex === index ? 'Mui-expanded' : ''}
              >
                <ExpandIconCell>
                  {expandedRowIndex === index ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </ExpandIconCell>
                <TableCell>{request.id}</TableCell>
                <TableCell>{request.address}</TableCell>
                <TableCell>{request.phoneNumber}</TableCell>
                <TableCell>{request.email}</TableCell>
              </ExpandableTableRow>
              <TableRow>
                <ExpandedDetailsCell colSpan={5}>
                  <Collapse in={expandedRowIndex === index} timeout="auto" unmountOnExit>
                    <div>
                      <Typography variant="h6">Items:</Typography>
                      <ul>
                        {request.items.map((item) => (
                          <li key={item.id}>
                            <Typography variant="body1">
                              ID: {item.id}, Name: {item.name}, Size: {item.size}, Color: {item.color}
                            </Typography>
                          </li>
                        ))}
                      </ul>
                      <Typography variant="h6">Status:</Typography>
                      <StatusSelect
                        value={request.status}
                        onChange={(e) => handleStatusChange(e, index)}
                        variant="outlined"
                      >
                        <MenuItem value="onHold">On Hold</MenuItem>
                        <MenuItem value="fulfilled">Fulfilled</MenuItem>
                        <MenuItem value="blocked">Blocked</MenuItem>
                      </StatusSelect>
                    </div>
                  </Collapse>
                </ExpandedDetailsCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};

export default DeliveryRequests;
