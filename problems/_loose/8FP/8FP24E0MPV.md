---
tag: 8FP24E0MPV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 CMIMC
    url: https://artofproblemsolving.com/community/c6h2791493
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=172
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=203821
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2022
    source: hf-ai-mo-aops
    label: 2022 CMIMC
---
At CMIMC headquarters, there is a row of $n$ lightbulbs, each of which is connected to a light switch. Daniel the electrician knows that exactly one of the switches doesn't work, and needs to find out which one. Every second, he can do exactly one of 3 things:

- Flip a switch, changing the lightbulb from off/on or on/off (unless the switch is broken).
- Check if a given lightbulb is on or off.
- Measure the total electricity usage of all the lightbulbs, which tells him exactly how many are currently on.

Initially, all the lightbulbs are off. Daniel was given the very difficult task of finding the broken switch in at most $n$ seconds, but fortunately he showed up to work 10 seconds early today. What is the largest possible value $n$ such that he can complete his task on time?

*Proposed by Adam Bertelli*
