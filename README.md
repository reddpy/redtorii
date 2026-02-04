# Red Torii

**The gate between you and scams.**

Official channel verification for companies.

---

## Problem

Companies tell customers "verify with us" but give them no tool to actually do that. No single page exists where customers can check if a phone number, email, or social handle is really from a company.

- Scammers impersonate companies via calls, emails, Telegram DMs, etc.
- Customers have no way to verify
- Companies lose money and trust

---

## Solution

A hosted trust page where companies register their official communication channels. Customers can search and verify any contact claiming to be from them.

```
Company signs up → Verifies domain → Adds channels → Gets trust page at verify.company.com
```

Customer searches a suspicious number → Sees: ✓ Legit or ✗ Not registered or ⚠️ Compromised

---

## Features

### MVP
- Company signup + domain verification (DNS TXT)
- Dashboard to add/edit channels
- Public trust page with search
- Status toggle (active / compromised / deprecated)
- Custom domain support (CNAME)

### Supported channels
- Phone numbers
- Email domains
- SMS short codes
- Twitter, Telegram, Discord, WhatsApp, Instagram, LinkedIn, Facebook

### Verification states
- ✓ Verified — "This is official"
- ✗ Not Found — "Not registered, verify independently"
- ⚠️ Compromised — "Do not respond"
- ⚠️ Deprecated — "No longer in use"

---

## Toolkit

Not just a page — a fraud communication kit:

- Auto-generated QR codes (for statements, cards, signage)
- Embeddable widget (for existing contact pages)
- Email/SMS templates (to announce to customers)
- Scam alerts (warn about active impersonation campaigns)
- Incident mode (one-click mark multiple channels compromised)

---

## Roadmap

### MVP
- [ ] Company signup + domain verification
- [ ] Channel dashboard
- [ ] Public trust page with search
- [ ] Status toggle
- [ ] Custom domain (CNAME)

### Next
- [ ] QR code generation
- [ ] Embeddable widget
- [ ] Analytics (what are people searching?)
- [ ] Scam alerts
- [ ] Incident mode

### Later
- [ ] Smart redirect links (intermediary protection)
- [ ] API access
- [ ] Webhooks
- [ ] Mobile SDK
- [ ] SSO / audit logs
- [ ] AI agent API

---

## Notes

- Start with crypto companies (high fraud, will pay, move fast)
- The product only works if companies promote it — so make promotion easy (toolkit)
- Custom domain means trust page lives on their domain (verify.chase.com), not ours

---

## Links

- Domain: redtorii.com
