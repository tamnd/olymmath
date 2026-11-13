---
tag: 4XF7FRAH8B
kind: problem
type: answer
answer: a) Yes; b) No
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=5
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo
    source: hf-mathnet
    label: Estonia Estonian Mathematical Olympiad
---
Every sound in a certain language can be either long or short. A sound is classified either as a vowel or as a consonant. Every word consists of exactly two sounds (without repetitions) and satisfies the following conditions.

1) Every word contains a short sound.
2) Words beginning with a vowel contain a long sound.
3) Words beginning with a consonant or ending with a vowel have a short sound at the end.

All sequences of two distinct sounds satisfying these conditions are words. The written language optimisation committee has decided to denote each sound with a different letter. However, they are considering two possibilities for denoting length. The first proposes denoting vowels with single letters and consonants with single or double letters based on length. The second instead proposes denoting consonants with single letters and vowels with single or double letters based on length. Is it possible to determine the lengths of sounds in all words from writing: a) in the case of the first proposal; b) in the case of the second proposal?
