---
tag: C0Z7D7YPVQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1422731
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78591
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267438
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2017
    source: hf-ai-mo-aops
    label: 2017 Online Math Open Problems
---
Let $S$ denote the set of fractions $\dfrac mn$ for relatively prime positive integers $m$ and $n$ with $m+n\le 10000$ . The least fraction in $S$ that is strictly greater than $$\prod_{i=0}^\infty \left(1-\dfrac{1}{10^{2i+1}}\right)$$ can be expressed in the form $\dfrac pq$ , where $p$ and $q$ are relatively prime positive integers. Find $1000p+q$ .

*Proposed by James Lin*
