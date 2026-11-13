---
tag: 7RNGAPM8Y7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1991 French Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2561161
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39095
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236427
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst/1991
    source: hf-ai-mo-aops
    label: 1991 French Mathematical Olympiad
---
(a) For given complex numbers $a_1,a_2,a_3,a_4$ , we define a function $P:\mathbb C\to\mathbb C$ by $P(z)=z^5+a_4z^4+a_3z^3+a_2z^2+a_1z$ . Let $w_k=e^{2ki\pi/5}$ , where $k=0,\ldots,4$ . Prove that $$ P(w_0)+P(w_1)+P(w_2)+P(w_3)+P(w_4)=5. $$ (b) Let $A_1,A_2,A_3,A_4,A_5$ be five points in the plane. A pentagon is inscribed in the circle with center $A_1$ and radius $R$ . Prove that there is a vertex $S$ of the pentagon for which $$ SA_1\cdot SA_2\cdot SA_3\cdot SA_4\cdot SA_5\ge R^5. $$
