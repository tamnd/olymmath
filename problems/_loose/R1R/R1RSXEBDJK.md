---
tag: R1RSXEBDJK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1422720
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78580
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
Let $p$ be an odd prime number less than $10^5$ . Granite and Pomegranate play a game. First, Granite picks a integer $c \in \{2,3,\dots,p-1\}$ .
Pomegranate then picks two integers $d$ and $x$ , defines $f(t) = ct + d$ , and writes $x$ on a sheet of paper.
Next, Granite writes $f(x)$ on the paper, Pomegranate writes $f(f(x))$ , Granite writes $f(f(f(x)))$ , and so on, with the players taking turns writing.
The game ends when two numbers appear on the paper whose difference is a multiple of $p$ , and the player who wrote the most recent number wins. Find the sum of all $p$ for which Pomegranate has a winning strategy.

*Proposed by Yang Liu*
