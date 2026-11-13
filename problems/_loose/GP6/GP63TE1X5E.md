---
tag: GP63TE1X5E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1339699
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14544
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216338
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2016
    source: hf-ai-mo-aops
    label: 2016 Online Math Open Problems
---
Let $G=10^{10^{100}}$ (a.k.a. a googolplex). Then $$\log_{\left(\log_{\left(\log_{10} G\right)} G\right)} G$$ can be expressed in the form $\frac{m}{n}$ for relatively prime positive integers $m$ and $n$ . Determine the sum of the digits of $m+n$ .

*Proposed by Yannick Yao*
