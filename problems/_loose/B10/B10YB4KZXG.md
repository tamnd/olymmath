---
tag: B10YB4KZXG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h585535
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11660
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213617
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2014
    source: hf-ai-mo-aops
    label: 2014 Online Math Open Problems
---
In the game of Nim, players are given several piles of stones. On each turn, a player picks a nonempty pile and removes any positive integer number of stones from that pile. The player who removes the last stone wins, while the first player who cannot move loses.

Alice, Bob, and Chebyshev play a 3-player version of Nim where each player wants to win but avoids losing at all costs (there is always a player who neither wins nor loses). Initially, the piles have sizes $43$ , $99$ , $x$ , $y$ , where $x$ and $y$ are positive integers. Assuming that the first player loses when all players play optimally, compute the maximum possible value of $xy$ .

*Proposed by Sammy Luo*
