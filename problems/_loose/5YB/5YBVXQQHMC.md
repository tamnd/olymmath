---
tag: 5YBVXQQHMC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1339707
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14551
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216345
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
For her zeroth project at Magic School, Emilia needs to grow six perfectly-shaped apple trees. First she plants six tree saplings at the end of Day $0$ . On each day afterwards, Emilia attempts to use her magic to turn each sapling into a perfectly-shaped apple tree, and for each sapling she succeeds in turning it into a perfectly-shaped apple tree that day with a probability of $\frac{1}{2}$ . (Once a sapling is turned into a perfectly-shaped apple tree, it will stay a perfectly-shaped apple tree.) The expected number of days it will take Emilia to obtain six perfectly-shaped apple trees is $\frac{m}{n}$ for relatively prime positive integers $m$ and $n$ . Find $100m+n$ .

*Proposed by Yannick Yao*
