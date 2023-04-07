import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('http://kong:8000/query/api/v1/test1');
  sleep(1);
}