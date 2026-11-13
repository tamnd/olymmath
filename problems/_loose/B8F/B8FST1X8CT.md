---
tag: B8FST1X8CT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h2828161
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54183
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178725
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2022
    source: hf-ai-mo-aops
    label: 2022 Romania National Olympiad
---
Let $\mathcal{F}$ be the set of functions $f:\mathbb{R}\to\mathbb{R}$ such that $f(2x)=f(x)$ for all $x\in\mathbb{R}.$

- Determine all functions $f\in\mathcal{F}$ which admit antiderivatives on $\mathbb{R}.$
- Give an example of a non-constant function $f\in\mathcal{F}$ which is integrable on any interval $[a,b]\subset\mathbb{R}$ and satisfies $$\int_a^bf(x) \ dx=0$$for all real numbers $a$ and $b.$
*Mihai Piticari and Sorin Rădulescu*
