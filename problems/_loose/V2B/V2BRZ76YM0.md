---
tag: V2BRZ76YM0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1077911
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78516
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267363
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2015
    source: hf-ai-mo-aops
    label: 2015 Online Math Open Problems
---
Let $a$ , $b$ , $c$ , and $d$ be positive real numbers such that
$$a^2 + b^2 - c^2 - d^2 = 0 \text{and} a^2 - b^2 - c^2 + d^2 = \frac{56}{53}(bc + ad).$$
Let $M$ be the maximum possible value of $\tfrac{ab+cd}{bc+ad}$ . If $M$ can be expressed as $\tfrac{m}{n}$ , where $m$ and $n$ are relatively prime positive integers, find $100m + n$ .

*Proposed by Robin Park*
