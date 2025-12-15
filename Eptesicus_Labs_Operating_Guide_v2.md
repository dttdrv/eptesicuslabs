# Eptesicus Labs — Operating Guide v2.0 (Design + Doctrine + Legal)
**Status:** Operating as an unregistered brand (pre-EOOD)  
**Owner:** Deyan Todorov (Bulgaria, EU)  
**Last updated:** 2025-12-15  
**Confidentiality:** Internal working document. Share only as needed.

---

## 0. Purpose and non-negotiables

This guide exists to keep Eptesicus Labs consistent across:
- product decisions (what we build and what we refuse to build),
- communications (what we claim and how we write),
- operations (how we scope, execute, and ship),
- legal hygiene (how we contract, invoice, and handle data prior to company registration).

**Non-negotiables**
1) Local-first by default. Cloud is optional, not required.  
2) Measured reliability, not marketing reliability.  
3) Privacy and control are product features, not footnotes.  
4) Clear boundaries: refuse unsafe requests; label uncertainty when verification is limited.  
5) Release discipline: each iteration must be measurable, reproducible, and auditable.

---

## 1. Scope and definitions

**Brand:** “Eptesicus Labs.” Public-facing identity only.  
**Operator:** Individual person acting in their own name until company registration.  
**Client:** Any party purchasing deliverables, services, licenses, or pilots.  
**Deliverable:** Software, model weights, datasets, eval harnesses, documentation, or design assets.  
**Confidential Information:** Non-public data disclosed by either party.  
**Product Stack:** The packaged combination of model(s), validators, runtime, and evaluation tooling.  
**Speaker:** The assistant model that drafts answers.  
**Council:** Validator models (Safety, Consistency, Accuracy).  
**Runtime:** Orchestrator that applies policy: pass/refuse/steer-and-retry.  
**Consumer License:** Personal-use access with no SLA.  
**Enterprise License:** Commercial rights with support/SLA and governance.  
**OEM/ISV License:** Bundling rights for devices or vertical software.

---

## 2. Brand system (logo, colors, typography, voice)

### 2.1 Logo doctrine (icon-first)
- Primary mark: the stylized “E” icon, monochrome black with a small blue accent bar.
- Use cases: app icon, website favicon, watermark for PDFs, product splash.
- Do not add gradients, 3D, mascots, brains, or circuit motifs.
- Maintain generous whitespace. The mark should not be boxed in.

**Clear space rule:** keep at least 1× the blue bar height as padding on all sides.  
**Minimum size:** do not render smaller than 24 px height in UI, or 12 mm in print.

### 2.2 Color palette (strict)
- Pure Black: #000000
- Off-White: #F7F7F7 (paper background)
- Neutral Gray: #B8B8B8 (secondary text)
- Accent Blue: #2D6CDF (links, separators, minimal emphasis only)

### 2.3 Typography
- Prefer system fonts: Inter / Segoe UI / SF Pro / Helvetica.
- Titles: bold, minimal.
- Body: readable line height, no dense walls of text.

### 2.4 Writing style
- Engineering-first. Short sentences. Concrete nouns. No hype.
- Avoid em dashes and startup theater.
- Claims must be measurable or clearly framed as goals.
- When uncertain: state uncertainty and why.

**Words to avoid:** “revolutionary”, “game-changing”, “SOTA”, “solves hallucinations”.  
**Preferred framing:** “reduces unsupported claims”, “improves self-correction”, “adds reliable low-confidence behavior”.

---

## 3. Vision and principles (ideology)

### 3.1 Core thesis
Cloud-first AI pushes products into recurring, unpredictable costs and forces sensitive inputs through third-party servers. Local models reduce both cost and data exposure, but are often unreliable. Eptesicus Labs focuses on reliability engineering (validators, steering, evaluation) so small models become default choices for real products.

### 3.2 Principles
1) **Local-first:** default to on-device inference.  
2) **Predictable costs:** minimize token-metered dependency.  
3) **Honest outputs:** uncertainty labeling is a feature.  
4) **Reproducible evaluation:** every claim needs a harness.  
5) **Minimal data:** collect the least possible, retain briefly, document deletion.  
6) **Auditable improvements:** traces, changelogs, acceptance tests.  
7) **Enterprise-grade discipline:** stable versions, support boundaries, clear terms.

---

## 4. Product doctrine (Lumis reliability layer)

### 4.1 One-sentence definition
Lumis-1 is a small on-device assistant model plus a Validator Council and a steering runtime that corrects drafts before the user sees them.

### 4.2 Canonical naming (never drift)
- **Speaker**: the assistant model that drafts the answer.
- **Council**: the validators (Safety, Consistency, Accuracy).
- **Runtime**: the orchestrator that decides pass / refuse / steer-and-retry.

### 4.3 Steering policy (lock for demos and early pilots)
1) Unsafe -> **REFUSED**  
2) Otherwise -> always return an answer  
3) If Consistency or Accuracy flags issues -> **STEER** and retry (max N=3)  
4) If still not clean -> return best answer + **LOW_CONFIDENCE**  
5) Offline external facts -> generic answer + uncertainty (no invented specifics)

### 4.4 Claims: allowed vs forbidden
**Must not claim**
- Eliminates hallucinations
- Stops hallucinations completely
- Guaranteed correct
- SOTA

**Safe, measurable claims**
- Reduces unsupported claims vs baseline model without steering
- Improves self-correction rate on flagged drafts
- Produces consistent low-confidence behavior for unverifiable prompts
- Refuses unsafe requests with measurable precision

### 4.5 Metrics (definition-level)
- **Repair success rate:** flagged drafts that become acceptable within N retries.
- **Unsupported claim rate:** invented specifics on prompts that require external facts offline.
- **Low-confidence precision:** how often uncertainty labeling is appropriate.
- **Refusal precision:** unsafe prompts refused / unsafe prompts presented.
- **Latency:** pass latency, steer latency, average tokens, worst-case.

### 4.6 Demo realism note (allowed disclosure)
In early demos, validators may be approximated by short classification prompts on the same base model to validate orchestration and measurement. The product end-state uses lightweight discriminative models.

---

## 5. Public-facing identity and representation (legal-critical)

### 5.1 Mandatory status statement (pre-EOOD)
Until registration, Eptesicus Labs is a brand only. All obligations are borne by the individual operator.

**Footer notice (site / PDFs)**
“Eptesicus Labs is a brand operated by [Full Name]. Eptesicus Labs is not a registered legal entity. All agreements are entered into by [Full Name].”

### 5.2 What must never be implied
- “EOOD”, “Ltd.”, “Inc.”, or any registration-like status.
- “We” statements that imply staff or entity unless accurate.
- VAT registration unless true.

### 5.3 Public copy rules
- Keep claims measurable.
- Avoid absolute language.
- If a demo uses approximated validators, disclose it in a sentence.

---

## 6. Operating model (intake -> delivery)

### 6.1 Pipeline (low variance)
1) Intake  
2) Triage  
3) Scope + acceptance criteria  
4) Commercials + payment schedule  
5) Written agreement (SOW or explicit email acceptance)  
6) Execution + change log  
7) Delivery + acceptance sign-off  
8) Closeout: invoice, archive, post-mortem notes

### 6.2 Intake form (minimum fields)
- Objective
- Constraints (device, offline, privacy, latency)
- Deadlines
- Budget window
- Data access (if any)
- Security requirements
- Acceptance tests

---

## 7. Documentation, versioning, and evidence

### 7.1 Project folder standard
- 01_agreement/
- 02_scope/
- 03_work/
- 04_delivery/
- 05_finance/
- index.md (single source of truth for decisions)

### 7.2 Evidence artifacts (for reliability products)
For any demo/pilot build, store:
- prompt suite used
- model/runtime versions
- traces (JSON)
- eval summary (JSON) + eval report (Markdown/PDF)
- known limits list

### 7.3 Release note skeleton
- Release: [name + version]
- Date
- What changed (bullets)
- Known limits (bullets)
- Acceptance reference (client sign-off or internal approval)
- Repro instructions (how to run / evaluate)

---

## 8. Contracting (pre-EOOD)

**Important:** This section provides operational templates. It is not legal advice. Review with qualified counsel before use.

### 8.1 Minimum clauses (never ship work without these)
- Scope + out of scope
- Milestones + payments
- Acceptance criteria
- Change control
- Confidentiality
- IP terms (license or assignment)
- Liability limit
- Termination
- Governing law + venue

### 8.2 Statement of Work (SOW) — short template
**Statement of Work — Eptesicus Labs (Pre-EOOD)**  
Client: [Name]  
Operator: [Full Name], trading as “Eptesicus Labs” (unregistered brand)  
Effective Date: [YYYY-MM-DD]

1) Scope  
- Deliverables: [D1, D2]  
- Out of scope: [O1, O2]

2) Milestones & Payments  
- M1: [desc] — [amount] — [due]  
- M2: [desc] — [amount] — [due]

3) Acceptance criteria  
- [measurable tests; device profiles; thresholds]

4) Change control  
- Changes require written approval and may adjust scope, cost, and timeline.

5) Confidentiality  
- Mutual protection of non-public information; standard exclusions.

6) Intellectual Property  
- Client receives [non-exclusive/exclusive] license to deliverables for [purpose/term/territory].  
- Operator retains pre-existing materials and generic know-how.

7) Liability  
- Capped at amounts paid. No indirect or consequential damages.

8) Termination  
- For convenience with [7] days notice; fees due for work performed to date.

Signatures: [Client] / [Operator]

### 8.3 Email acceptance language (fallback)
“We confirm acceptance of the SOW dated [date]. We agree to the scope, schedule, and payment terms. — [Client Name]”

---

## 9. Pricing and payment

### 9.1 Default posture
- milestone payments (e.g., 30/40/30) with upfront deposit
- payment methods in operator’s name (bank transfer or card processor)

### 9.2 Late payment clause (simple)
“Overdue balances accrue simple interest at [X%]/month after [N] days.”

---

## 10. Accounting and records

Maintain a ledger of income/expenses with source documents (invoices, receipts, bank statements). Prefer a dedicated sub-account or wallet for brand operations where possible.

**Ledger headers (CSV)**
Date,Type,Counterparty,Project,Description,Amount,Currency,Category,InvoiceID,ReceiptID,Notes

Monthly close checklist:
- reconcile bank vs ledger
- issue pending invoices
- archive deliverables + release notes
- update tax buffer estimate

---

## 11. Tax posture (pre-registration)

All revenue is personal income of the operator until registration. Track taxable income and allowable expenses. Maintain a tax buffer based on current local rates and rules.

Invoice annotation (recommended):
“Issued by individual operator trading as ‘Eptesicus Labs’. No company registration implied.”

---

## 12. Data protection, privacy, and compliance (EU)

### 12.1 Default posture
- minimize personal data collection
- prefer device-local processing
- no analytics without explicit consent
- define retention and deletion

### 12.2 GDPR role clarity
- If Eptesicus Labs processes client-provided personal data on behalf of a client, the client is typically the **controller** and the operator is a **processor** (unless the project structure changes that).
- For consumer products, clarify whether Eptesicus Labs is a controller for any collected data.

### 12.3 Privacy notice (minimal pre-EOOD)
“We collect only operational data required to communicate and deliver work (e.g., email, message history). No analytics without explicit consent. Deletion requests are honored within [X] days. Contact: [email].”

### 12.4 Data deletion requests
- acknowledge within 2 business days
- delete within defined SLA
- log the action

### 12.5 Security incident response (minimum)
Contain, assess impact, notify affected clients with:
- timeline
- data categories affected
- mitigation steps
- prevention steps

---

## 13. Intellectual property and licensing

### 13.1 IP posture
- internal model weights, datasets, and tooling are proprietary unless explicitly licensed
- client deliverables: license only what the client needs, keep generic components

### 13.2 Consumer vs enterprise vs OEM/ISV
- **Consumer:** personal-use license, free access where possible, no SLA
- **Enterprise:** commercial license + SLA/support + governance + stable versions
- **OEM/ISV:** bundling rights + integration support + compliance options

### 13.3 AI output disclaimer (recommended for any product)
“Outputs may be incorrect. Do not rely on the system for medical, legal, or safety-critical decisions. When verification is limited, the system may label low confidence.”

### 13.4 IP transfer (post-registration)
**IP Assignment**
Assignor: [Full Name]  
Assignee: Eptesicus Labs EOOD (upon registration)  
Scope: assets listed in Schedule A  
Effective: [registration date]  
Signatures: [Assignor] / [Assignee]

---

## 14. Collaboration and subcontracting

- use written internal agreements for splits and responsibilities
- operator remains prime to the client
- subcontractors contract with the operator unless otherwise agreed

Partner agreement fragment:
- split: Prime [60%] / Partner [40%] of net after direct costs
- payment timing: within 5 business days of client receipt
- confidentiality and IP: aligned to the client SOW

---

## 15. Risk management

### 15.1 Contract risk
- cap liability to amounts paid
- exclude indirect/consequential damages
- define acceptance criteria to reduce ambiguity

### 15.2 Product risk (reliability claims)
- avoid absolute claims
- publish eval harness definition with any metric claims
- disclose demo approximations

### 15.3 IP leakage risk
Because models run on customer hardware, technical controls can deter casual extraction but cannot guarantee prevention. Protection must combine licensing, attribution, and operational controls.

---

## 16. Scenario playbooks (scripts)

### 16.1 Client demands invoice from a registered company
“We currently operate as an individual under the Eptesicus Labs brand. If a registered entity is mandatory, we can schedule the engagement to commence after registration. Confirm preference.”

### 16.2 VAT request
If VAT details are required and the operator has none, provide a non-VAT invoice or defer until post-registration if VAT is mandatory.

### 16.3 Scope creep mid-project
Invoke change control. Provide delta cost and timeline. Proceed only on written approval.

### 16.4 Non-payment
Send formal notice, pause work, apply late fee if stipulated, offer short remediation window.

### 16.5 NDA prior to scoping
Use short mutual NDA. Keep definitions narrow and duration finite.

### 16.6 Data deletion request
Acknowledge within 2 business days. Delete within SLA. Log action.

### 16.7 Security incident
Contain, assess, notify with facts and remediation steps.

### 16.8 Third-party license conflict
Replace component with compliant alternative. Document change.

---

## 17. Tooling and infrastructure (low-cost, low-leakage)

- Version control: Git (private repos for proprietary work)
- Docs: Markdown + plain text
- Accounting: spreadsheet + PDF exports
- Contracts: Markdown + PDF with e-signature
- Backups: encrypted archives + offsite redundancy
- Repro: pinned dependencies, recorded seeds, fixed prompt suites

---

## 18. Registration decision thresholds (EOOD/OOD)

Trigger registration when one or more apply:
- recurring monthly revenue exceeds [X] for 3 consecutive months
- a client requires a registered entity for contract award
- VAT/cross-border compliance requires it
- hiring/subcontracting requires company structure
- banking/processors require corporate onboarding

---

## 19. Transition plan to EOOD/OOD

Pre-registration:
- confirm name availability
- prepare incorporation docs
- select accountant and bank

Registration:
- file incorporation documents electronically where possible
- obtain company identifiers (EIK/UIC)

Post-registration:
- open corporate bank account
- update site footer/legal pages
- execute IP assignment
- migrate ongoing SOWs via addendum
- establish bookkeeping cadence

**Addendum — Counterparty change**
This addendum assigns all rights and obligations under SOW [ID] from [Full Name] to Eptesicus Labs EOOD as of [Effective Date]. All other terms remain unchanged.  
Signatures: [Client] / [Company]

---

## 20. Calendars and checklists

Weekly:
- lead triage
- scope updates
- WIP review
- encrypted backup

Monthly:
- reconcile ledger
- issue invoices
- archive deliverables
- update tax buffer

Pre-release:
- acceptance criteria verification
- third-party license audit
- security checklist
- trace + eval report generated
- release notes finalized

---

## 21. Minimal site copy (pre-EOOD)

### 21.1 Footer
“Eptesicus Labs is a brand operated by [Full Name]. No legal entity implied. Contracts and invoices are issued by the operator.”

### 21.2 About (public)
Eptesicus Labs builds local-first AI and a reliability layer that helps small models behave predictably offline. We focus on measurable improvements: fewer unsupported claims, stronger self-correction, and honest low-confidence behavior when verification is limited.

### 21.3 Privacy (public short)
“We collect only operational data required to communicate and deliver. No analytics without explicit consent. Contact: [email].”

### 21.4 Product disclaimer (public short)
“Outputs may be incorrect. Do not rely on this system for medical, legal, or safety-critical decisions.”

---

## 22. Records retention

Keep agreements, invoices, receipts, and delivery artifacts for the statutory period defined by local law (verify annually). Maintain offsite encrypted backups.

---

## 23. Declarations

- No claims are made regarding corporate status prior to registration.
- All communications must be accurate, minimal, and verifiable.
- Reliability claims must be backed by a defined evaluation harness.
- This document provides operational templates and is not legal advice.

---

## Appendices (copy/paste templates)

### A. Invoice template (plain text)
INVOICE  
Issuer: [Full Name], trading as “Eptesicus Labs”  
Address: [Address]  
IBAN: [IBAN]  

Client: [Client Name]  
Invoice No: [YYYY-NN]  
Date: [YYYY-MM-DD]  
Due: [YYYY-MM-DD]  

Items:  
1) [Description] — [Qty] — [Unit Price] — [Amount]  

Subtotal: [Amount]  
Total Due: [Amount]  
Reference: SOW [ID]  
Payment Terms: Net [N] days  
Notes: Issued by individual operator. No company registration implied.

### B. Change request form (plain text)
Change Request — [Project]  
Requester: [Name]  
Description: [Change]  
Impact: [Scope/Cost/Timeline]  
Decision: [Approve/Reject]  
Date: [YYYY-MM-DD]

### C. Acceptance certificate (plain text)
Acceptance Certificate — [Deliverable]  
Client confirms Deliverable meets acceptance criteria as of [Date].  
Signed: [Client Name]

### D. Mutual NDA (short form)
Parties: [Client] and [Full Name] trading as “Eptesicus Labs”  
Purpose: evaluation of potential work.  
Confidentiality: mutual; standard exclusions apply.  
Term: 2 years from Effective Date.  
Governing Law: [Jurisdiction]  
Signatures: [Both]

### E. AI evaluation report disclaimer (snippet)
“This report summarizes model behavior on a limited prompt suite under specific settings. Results may not generalize to all prompts or deployments. The system may produce incorrect outputs. Do not rely on it for safety-critical decisions.”

### F. Consumer terms of use (minimal snippet)
“You may use the software for personal purposes. You may not resell, redistribute, or remove notices. The software is provided as-is without warranties.”

### G. Enterprise license term sheet (non-binding outline)
- License scope: internal business use, specified devices/users  
- Term: 12 months renewable  
- Support: tiered SLA (response times, patch policy)  
- Restrictions: no redistribution, no public benchmarking without consent (optional)  
- Liability: capped; no indirect damages  
- Confidentiality: mutual NDA or MSA  
- Governance: version pinning and update cadence

### H. Data processing addendum (DPA) outline
- roles: controller/processor  
- processing purpose and instructions  
- sub-processors (if any)  
- security measures  
- retention and deletion  
- data subject requests assistance  
- breach notification timelines

