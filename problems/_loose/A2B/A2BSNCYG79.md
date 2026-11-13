---
tag: A2BSNCYG79
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h2055662
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19274
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220817
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2020
    source: hf-ai-mo-aops
    label: 2020 Online Math Open Problems
---
Let $A$ , $B$ be opposite vertices of a unit square with circumcircle $\Gamma$ . Let $C$ be a variable point on $\Gamma$ . If $C\not\in\{A, B\}$ , then let $\omega$ be the incircle of triangle $ABC$ , and let $I$ be the center of $\omega$ . Let $C_1$ be the point at which $\omega$ meets $\overline{AB}$ , and let $D$ be the reflection of $C_1$ over line $CI$ . If $C \in\{A, B\}$ , let $D = C$ . As $C$ varies on $\Gamma$ , $D$ traces out a curve $\mathfrak C$ enclosing a region of area $\mathcal A$ . Compute $\lfloor 10^4 \mathcal A\rfloor$ .

*Proposed by Brandon Wang*
