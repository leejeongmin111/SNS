import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function LoginFalse() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">JOBSNS에 로그인하는 중 문제가 발생했습니다. ID와 PW를 확인해주세요</Alert>
    </Stack>
  );
}