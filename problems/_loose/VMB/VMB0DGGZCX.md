---
tag: VMB0DGGZCX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h407369
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6333
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=147932
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2011
    source: hf-ai-mo-aops
    label: 2011 China Team Selection Test
---
A positive integer $n$ is known as an *interesting* number if $n$ satisfies
$${\ \{\frac{n}{10^k}} \} > \frac{n}{10^{10}} $$
for all $k=1,2,\ldots 9$ .
Find the number of interesting numbers.
