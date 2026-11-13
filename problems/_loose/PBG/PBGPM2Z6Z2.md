---
tag: PBGPM2Z6Z2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Serbia National Math Olympiad
    url: https://artofproblemsolving.com/community/c6h1070674
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=13124
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215027
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rs-smo/2015
    source: hf-ai-mo-aops
    label: 2015 Serbia National Math Olympiad
---
We have $2015$ prisinoers.The king gives everyone a hat coloured in one of $5$ colors.Everyone sees all hats expect his own.Now,the King orders them in a line(a prisioner can see all guys behind and in front of him).The king asks the prisinoers
one by one does he know the color of his hat.If he answers **NO**,then he is killed.If he answers **YES**,then answers which color is his hat,if his answers is true,he goes to freedom,if not,he is killed.All the prisinors can hear did he answer **YES** or **NO**,but if he answered **YES**,they don't know what did he answered(he is killed in public).They can think of a strategy before the King comes,but after that they can't comunicate.What is the largest number of prisinors we can guarentee that can survive?
