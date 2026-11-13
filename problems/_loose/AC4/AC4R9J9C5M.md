---
tag: AC4R9J9C5M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1978 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h2964183
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39263
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236563
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-bundeswettbewerb/1978
    source: hf-ai-mo-aops
    label: 1978 Bundeswettbewerb Mathematik
---
Sunn and Tacks play a game alternately choosing a word among the following (German) words: "bad", "binse", "kafig", "kosewort", "maitag", "name", "pol", "parade", "wolf". Two words are said to compatible if they have exactly one consonant in common. In the first round, Sunn selects a word for herself and one for Tacks. In every consequent round, each player selects a word that is compatible with the one they chose in the previous round. Tacks wins the game if the two players successively select the same word.
(a) Prove that Tacks can always win. How many rounds are necessary for that?
(b) Upon Sunn's desire, the word "kafig" was replaced with the word "feige".
Prove that Sunn can prevent Tacks from winning.
