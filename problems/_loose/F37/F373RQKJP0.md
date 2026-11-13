---
tag: F373RQKJP0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 BMT Spring
    url: https://artofproblemsolving.com/community/c6h2751568
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69833
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=260769
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2014
    source: hf-ai-mo-aops
    label: 2014 BMT Spring
---
Leo and Paul are at the Berkeley BART station and are racing to San Francisco. Leo is planning to take the line that takes him directly to SF, and because he has terrible BART luck, his train will arrive in some integer number of minutes, with probability $\frac i{210}$ for $1\le i\le20$ at any given minute. Paul will take a second line, whose trains always arrive before Leo's train, with uniform probability. However, Paul must also make a transfer to a 3rd line, whose trains arrive with uniform probability between $0$ and $10$ minutes after Paul reaches the transfer station. What is the probability that Leo gets to SF before Paul does?
