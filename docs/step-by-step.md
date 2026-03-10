# Step by Step — Market Taxonomy

## Fase 1 — Struttura base (completata)
- [x] 43 market folders con L1/L2/L3
- [x] Homepage + macro-markets + flow A→B→C
- [x] Problem selection + output sheet
- [x] i18n + taxonomy-numbers.js
- [x] Doc governance (CLAUDE.md, ROADMAP.md, FLOW.md, docs/)

## Fase 2 — L1 Rewrite (43/43 completati)
- [x] Healthcare, Energy, Insurance, Legal, Telecommunications (manuale)
- [x] Real Estate (gia buona qualita)
- [x] Batch 1: Advertising, Aerospace, Agriculture, Automotive, Banking, Capital Markets, Chemicals, Construction
- [x] Batch 2: Consumer Goods, Education, Environmental & Climate, Fashion & Apparel, Financial Services, Food & Beverage, Gaming, Government & Public Sector
- [x] Batch 3: Hardware, HR & Recruiting, Logistics, Manufacturing, Media, Medical Devices, Mining
- [x] Batch 4: Non-profit, Payments, Pharma & Biotech, Professional Services, Religion, Retail, Security & Defense
- [x] Batch 5: Software, Sports & Fitness, Technology, Tourism, Transportation, Utilities, Wholesale & Distribution

## Fase 3 — Vertical Market Build (33/43)
Per ogni mercato, in ordine dalla grid L0:
1. Verificare/finalizzare L1 (fonti, categorie)
2. Riscrivere L2 pages (4-5 segmenti, fonti segment-level)
3. Creare L2.1 pages (1 per segmento, dettaglio)
4. Riscrivere L3 pages (3-5 niches per segmento, fonti niche-level)
5. Verificare catena link L1→L2→L2.1→L3

### Ordine (dalla grid macro-markets.html):
- [x] 01. Real Estate — L2(6) + L2.1(24) + L3(26) = 0 link rotti
- [x] 02. Construction & Infrastructure — L2(6+18) + L2.1(18) + L3(54)
- [x] 03. Food & Beverage — 6 L2, 22 L2.1, 22 L3 (Euromonitor, USDA ERS, FDA, FAO)
- [x] 04. Agriculture — 6 L2, 22 L2.1, 22 L3 (USDA, FAO, AgFunder, CropLife)
- [x] 05. Energy — 6 L2, 25 L2.1, 25 L3 (IEA, EIA, IRENA, BloombergNEF)
- [x] 06. Utilities — 5 L2, 20 L2.1, 20 L3 (EIA, EPA, AWWA, FERC)
- [x] 07. Transportation & Mobility — 6 L2, 24 L2.1, 24 L3 (IATA, IRF, USDOT, McKinsey)
- [x] 08. Automotive — 6 L2, 18 L2.1, 18 L3 (OICA, S&P Global Mobility, NADA, SAE)
- [x] 09. Manufacturing — 5 L2, 24 L2.1, 24 L3 (UNIDO, NAM, McKinsey, Deloitte)
- [x] 10. Consumer Goods — 6 L2, 27 L2.1, 27 L3 (Euromonitor, NielsenIQ, Statista)
- [x] 11. Retail & E-commerce — 6 L2, 19 L2.1, 19 L3 (NRF, Euromonitor, eMarketer)
- [x] 12. Wholesale & Distribution — 6 L2, 20 L2.1, 20 L3 (NAW, MDM, IBISWorld)
- [x] 13. Healthcare — 6 L2, 19 L2.1, 19 L3 (CMS, WHO, AHA, IQVIA)
- [x] 14. Pharmaceuticals & Biotech — 6 L2, 23 L2.1, 23 L3 (FDA, EMA, IQVIA)
- [x] 15. Medical Devices — 6 L2, 23 L2.1, 23 L3 (FDA CDRH, EvaluateMedTech, AdvaMed)
- [x] 16. Financial Services — 6 L2, 21 L2.1, 21 L3 (BIS, IMF, McKinsey, BCG)
- [x] 17. Banking — 6 L2, 18 L2.1, 18 L3 (FDIC, OCC, Federal Reserve, BIS Basel)
- [x] 18. Insurance — 6 L2, 18 L2.1, 18 L3 (NAIC, AM Best, Swiss Re)
- [x] 19. Payments — 6 L2, 18 L2.1, 18 L3 (Nilson, McKinsey Payments, BIS)
- [x] 20. Capital Markets — 6 L2, 18 L2.1, 18 L3 (SIFMA, BIS, WFE)
- [x] 21. Technology — 7 L2, 23 L2.1, 23 L3 (Gartner, IDC, Forrester, SIA)
- [x] 22. Software — 6 L2, 18 L2.1, 18 L3 (Gartner, IDC, Forrester, Synergy Research)
- [x] 23. Hardware — 6 L2, 18 L2.1, 18 L3 (IDC, Gartner, TechInsights)
- [x] 24. Telecommunications — 6 L2, 18 L2.1, 18 L3 (ITU, GSMA, FCC)
- [x] 25. Media & Entertainment — 6 L2, 18 L2.1, 18 L3 (PwC, MPA, IFPI)
- [x] 26. Gaming — 6 L2, 18 L2.1, 18 L3 (Newzoo, SuperData, ESA)
- [x] 27. Advertising & Marketing — 6 L2, 19 L2.1, 19 L3 (IAB, eMarketer, GroupM, Magna)
- [x] 28. Education — 6 L2, 18 L2.1, 18 L3 (UNESCO, NCES, HolonIQ)
- [x] 29. Professional Services — 6 L2, 18 L2.1, 18 L3 (IBISWorld, Source Global)
- [x] 30. Legal — 6 L2, 18 L2.1, 18 L3 (Thomson Reuters, ALM, Clio)
- [x] 31. HR & Recruiting — 6 L2, 18 L2.1, 18 L3 (SHRM, SIA, Bersin)
- [x] 32. Security & Defense — 6 L2, 18 L2.1, 18 L3 (SIPRI, Janes, DSCA)
- [x] 33. Government & Public Sector — 6 L2, 18 L2.1, 18 L3 (OECD, IMF, World Bank)
- [x] 34. Tourism & Hospitality — 6 L2, 18 L2.1, 18 L3 (UNWTO, WTTC, STR)
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
- [x] Rimuovere "cartella senza nome"
- [x] Rimuovere MARKETS/Real Estate/L2.1/MARKETS/ (duplicato)
- [x] Rimuovere .DS_Store, aggiungere a .gitignore
- [ ] Verificare consistenza globale link e i18n
- [x] Implementare search bar full-text (multi-categoria: Markets + BD + BS + DM)
