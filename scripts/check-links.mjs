// Static audit: every affiliate URL must be https, wellnessnest.co, carry ref=hesttjew exactly once.
import { AFFILIATE_MAPPING, AFFILIATE_DEFAULT, validateAffiliateUrl } from '../lib/affiliate.js';
let bad = 0;
for (const [k, v] of Object.entries({ ...AFFILIATE_MAPPING, default: AFFILIATE_DEFAULT })) {
  const ok = validateAffiliateUrl(v) && (v.match(/ref=hesttjew/g) || []).length === 1;
  console.log(ok ? 'PASS' : 'FAIL', k, v);
  if (!ok) bad++;
}
process.exit(bad ? 1 : 0);
