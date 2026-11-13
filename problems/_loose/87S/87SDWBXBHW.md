---
tag: 87SDWBXBHW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 24th Philippine MO Qualifying Stage
    url: https://artofproblemsolving.com/community/c6h3502581
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50846
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154753
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0001.parquet#row=310
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-ai-mo-aops
    label: 24th Philippine MO Qualifying Stage
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines 24th Philippine Mathematical Olympiad
---
You roll a fair $12$ -sided die repeatedly. The probability that all the primes show up at least once before seeing any of the other numbers can be expressed as a fraction $p/q$ in lowest terms. What is $p+q$ ?
