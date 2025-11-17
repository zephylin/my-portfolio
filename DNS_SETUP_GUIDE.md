# 🔧 DNS Configuration Guide for GitHub Pages

## Understanding the Error
The error "Domain's DNS record could not be retrieved" means GitHub can't find the correct DNS records pointing to your GitHub Pages site.

## Step-by-Step DNS Configuration

### Option 1: Using `.dev` Domain (zephylindusengimana.dev)

**Important:** `.dev` domains require HTTPS, which GitHub Pages supports automatically.

#### Step 1: Update CNAME File
If you want to use `.dev` instead of `.com`, update the CNAME file:
```
zephylindusengimana.dev
```

#### Step 2: Configure DNS at Your Domain Registrar

Go to your domain registrar (where you bought the domain) and add these DNS records:

**For the root domain (zephylindusengimana.dev):**
- **Type:** A (IPv4 Address)
- **Name/Host:** @ (or leave blank, or `zephylindusengimana.dev`)
- **Value/Points to:** `185.199.108.153`
- **TTL:** 3600 (or default)

Add 3 more A records with the same name but different IPs:
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

**For www subdomain (www.zephylindusengimana.dev):**
- **Type:** CNAME
- **Name/Host:** www
- **Value/Points to:** `zephylin.github.io`
- **TTL:** 3600 (or default)

---

### Option 2: Using `.com` Domain (zephylindusengimana.com)

#### Step 1: Keep CNAME File As Is
The CNAME file already has: `zephylindusengimana.com`

#### Step 2: Configure DNS at Your Domain Registrar

**For the root domain (zephylindusengimana.com):**
Add 4 A records:
- **Type:** A
- **Name/Host:** @ (or blank)
- **Value:** `185.199.108.153`
- **TTL:** 3600

Repeat for these IPs:
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

**For www subdomain:**
- **Type:** CNAME
- **Name/Host:** www
- **Value:** `zephylin.github.io`
- **TTL:** 3600

---

## Common Domain Registrars - Where to Find DNS Settings

### GoDaddy
1. Log in → My Products → DNS
2. Click "Add" to create new records
3. Select record type (A or CNAME)
4. Enter values above

### Namecheap
1. Domain List → Manage → Advanced DNS
2. Add New Record
3. Select type and enter values

### Google Domains
1. My domains → DNS
2. Custom records → Create new record
3. Enter values

### Cloudflare
1. Select domain → DNS → Records
2. Add record
3. Enter values

### Name.com
1. Domain Management → DNS Records
2. Add Record
3. Enter values

---

## After Adding DNS Records

### Step 1: Wait for DNS Propagation
- Usually takes 5-30 minutes
- Can take up to 48 hours (rare)
- Check propagation: https://www.whatsmydns.net

### Step 2: Configure in GitHub
1. Go to: https://github.com/zephylin/my-portfolio/settings/pages
2. Under "Custom domain", enter your domain (e.g., `zephylindusengimana.dev`)
3. Check "Enforce HTTPS" (recommended)
4. Click Save

### Step 3: Verify
- GitHub will show "DNS check successful" when ready
- Visit your domain in a browser
- Should redirect to HTTPS automatically

---

## Troubleshooting

### Still Getting DNS Error?
1. **Double-check DNS records:**
   - All 4 A records must be added
   - CNAME for www must point to `zephylin.github.io` (not your domain)
   - Wait at least 10 minutes after adding records

2. **Verify DNS propagation:**
   - Use: https://www.whatsmydns.net
   - Enter your domain
   - Check if A records show GitHub IPs

3. **Check CNAME file:**
   - Must match exactly what you entered in GitHub
   - No extra spaces or characters
   - Case sensitive

4. **Remove and re-add domain in GitHub:**
   - Remove custom domain
   - Wait 5 minutes
   - Add it back

### Domain Not Loading?
- Clear browser cache
- Try incognito/private mode
- Check if GitHub Pages is enabled and deployed
- Verify site works at: `https://zephylin.github.io/my-portfolio`

---

## Quick Reference: DNS Records Needed

```
Type    Name    Value
----    ----    -----
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
CNAME   www     zephylin.github.io
```

**Note:** Replace `@` with your domain name if your registrar doesn't support `@` notation.

