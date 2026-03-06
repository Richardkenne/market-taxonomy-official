# Step by Step — Market Taxonomy

## Fase 1 — Struttura base (completata)
- [x] 43 market folders con L1/L2/L3
- [x] Homepage + macro-markets + flow A→B→C
- [x] Problem selection + output sheet
- [x] i18n + taxonomy-numbers.js
- [x] Doc governance (CLAUDE.md, ROADMAP.md, FLOW.md, docs/)

## Fase 2 — L1 Rewrite (35/43 completati)
- [x] Healthcare, Energy, Insurance, Legal, Telecommunications (manuale)
- [x] Real Estate (gia buona qualita)
- [x] Batch 1: Advertising, Aerospace, Agriculture, Automotive, Banking, Capital Markets, Chemicals, Construction
- [x] Batch 3: Hardware, HR & Recruiting, Logistics, Manufacturing, Media, Medical Devices, Mining
- [x] Batch 4: Non-profit, Payments, Pharma & Biotech, Professional Services, Religion, Retail, Security & Defense
- [x] Batch 5: Software, Sports & Fitness, Technology, Tourism, Transportation, Utilities, Wholesale & Distribution
- [ ] Batch 2 (fallito per rate limit — 8 mercati):
  - [ ] Consumer Goods
  - [ ] Education
  - [ ] Environmental & Climate
  - [ ] Fashion & Apparel
  - [ ] Financial Services
  - [ ] Food & Beverage
  - [ ] Gaming
  - [ ] Government & Public Sector

## Fase 3 — Vertical Market Build (0/43)
Per ogni mercato, in ordine dalla grid L0:
1. Verificare/finalizzare L1 (fonti, categorie)
2. Riscrivere L2 pages (4-5 segmenti, fonti segment-level)
3. Creare L2.1 pages (1 per segmento, dettaglio)
4. Riscrivere L3 pages (3-5 niches per segmento, fonti niche-level)
5. Verificare catena link L1→L2→L2.1→L3

### Ordine (dalla grid macro-markets.html):
- [ ] 01. Real Estate (ha gia L2.1 — usare come reference)
- [ ] 02. Construction & Infrastructure (ha gia L2.1)
- [ ] 03. Food & Beverage (ha gia L2.1)
- [ ] 04. Agriculture (ha gia L2.1)
- [ ] 05. Energy
- [ ] 06. Utilities
- [ ] 07. Transportation & Mobility
- [ ] 08. Automotive
- [ ] 09. Manufacturing
- [ ] 10. Consumer Goods
- [ ] 11. Retail & E-commerce
- [ ] 12. Wholesale & Distribution
- [ ] 13. Healthcare
- [ ] 14. Pharmaceuticals & Biotech
- [ ] 15. Medical Devices
- [ ] 16. Financial Services
- [ ] 17. Banking
- [ ] 18. Insurance
- [ ] 19. Payments
- [ ] 20. Capital Markets
- [ ] 21. Technology
- [ ] 22. Software
- [ ] 23. Hardware
- [ ] 24. Telecommunications
- [ ] 25. Media & Entertainment
- [ ] 26. Gaming
- [ ] 27. Advertising & Marketing
- [ ] 28. Education
- [ ] 29. Professional Services
- [ ] 30. Legal
- [ ] 31. HR & Recruiting
- [ ] 32. Security & Defense
- [ ] 33. Government & Public Sector
- [ ] 34. Tourism & Hospitality
- [ ] 35. Fashion & Apparel
- [ ] 36. Logistics & Supply Chain
- [ ] 37. Chemicals & Materials
- [ ] 38. Mining
- [ ] 39. Aerospace
- [ ] 40. Sports & Fitness
- [ ] 41. Non-profit & Social
- [ ] 42. Religion & Faith
- [ ] 43. Environmental & Climate

## Fase 4 — Pulizia & Verifica
- [ ] Rimuovere "cartella senza nome"
- [ ] Rimuovere MARKETS/Real Estate/L2.1/MARKETS/ (duplicato)
- [ ] Rimuovere .DS_Store, aggiungere a .gitignore
- [ ] Verificare consistenza globale link e i18n
- [ ] Implementare search bar full-text
