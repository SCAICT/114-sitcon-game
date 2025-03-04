import React, { useState, useEffect } from 'react';
import Questions from './Questions';
import PixelLogo from './components/PixelLogo';
import PixelStar from './components/PixelStar';
import Links from './components/Links';
import PixelGrid from './components/PixelGrid';
import Character from './components/Character';
import goblin from './assets/goblin.png';
import elf from './assets/christmas-elf.png';
import "./index.css"


const App = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [shuffledOptions, setShuffledOptions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);
    const [typingEffect, setTypingEffect] = useState('');
    const [typingComplete, setTypingComplete] = useState(false);
    const [showSelectEffect, setShowSelectEffect] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        if (Questions[currentQuestion]) {
            const shuffleArray = (array) => {
                const newArray = array.slice();
                for (let i = newArray.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
                }
                return newArray;
            };
            setShuffledOptions(shuffleArray(Questions[currentQuestion].options));
            setTypingEffect('');
            setTypingComplete(false);

            const questionText = Questions[currentQuestion].question;
            let charIndex = 0;
            const typeInterval = setInterval(() => {
                if (charIndex < questionText.length) {
                    setTypingEffect((prev) => prev + questionText.charAt(charIndex));
                    charIndex++;
                } else {
                    clearInterval(typeInterval);
                    setTypingComplete(true);
                }
            }, 30);

            return () => clearInterval(typeInterval);
        }
    }, [currentQuestion]);

    const handleAnswer = (option, index) => {
        setSelectedOption(index);
        setShowSelectEffect(true);
        setTimeout(() => {
            const choiceIndex = option.charAt(0);
            setAnswers((prev) => [...prev, choiceIndex]);
            if (currentQuestion < Questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
            } else {
                setShowResult(true);
            }
            setShowSelectEffect(false);
            setSelectedOption(null);
        }, 300);
    };

    const getResult = () => {
        const goblinCount = answers.filter((a) => a === 'A' || a === 'B').length;
        const elfCount = answers.filter((a) => a === 'C' || a === 'D').length;

        if (goblinCount > elfCount) {
            return {
                type: '資訊圈哥布林',
                description:
                    '你是一個安靜低調的資訊圈哥布林！喜歡簡單、踏實的生活方式，不追求外在的華麗，而是在平凡中尋找舒適與自在。',
                image: (
                    <img
                        src={goblin}
                        className="pixel-character pixelated"
                        alt="Goblin"
                    />
                ),
            };
        } else {
            return {
                type: '資訊圈精靈',
                description:
                    '你是一個光芒四射的資訊圈精靈！熱愛時尚、精緻的生活方式，善於社交並勇於展現自我。',
                image: (
                    <img
                        src={elf}
                        className="pixel-character pixelated"
                        alt="Christmas Elf"
                    />
                ),
            };
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setAnswers([]);
        setShowResult(false);
        setGameStarted(false);
    };

    const startQuiz = () => {
        setGameStarted(true);
    };

    const getOption = (option) => option.replace(/^[A-Z]\.? ?/, '');

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white font-pixel flex flex-col items-center justify-center p-4 overflow-hidden relative">
            <PixelGrid />
            {Array(20)
                .fill()
                .map((_, i) => (
                    <div
                        key={`particle-${i}`}
                        className="pixel-particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDuration: `${5 + Math.random() * 15}s`,
                            width: `${2 + Math.random() * 6}px`,
                            height: `${2 + Math.random() * 6}px`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    ></div>
                ))}
            <div className="w-full max-w-md pixel-border p-6 rounded-lg shadow-lg bg-gray-800/80 backdrop-blur-sm relative z-10 fade-in">
                <PixelStar />
                <PixelLogo />
                {!gameStarted ? (
                    <div className="text-center fade-in">
                        <h1 className="text-2xl font-bold mb-6 border-b-4 border-dashed border-white pb-2 pixel-text glow-text">
                            資訊圈性格測試
                        </h1>
                        <Character />
                        <p className="mb-8 pixel-text typewriter">
                            探索你在數位世界的真實性格...
                            <br />
                            哥布林還是精靈？??
                            <br />
                            讓科技解析你的靈魂~~~
                        </p>
                        <button onClick={startQuiz} className="pixel-btn action-btn">
                            &gt;&gt; 開始測驗 &lt;&lt;
                        </button>
                        <div className="mt-6 text-xs text-gray-300 pixel-text">
                            [ 2025 SITCON ]
                        </div>
                    </div>
                ) : !showResult ? (
                    <div className="fade-in">
                        <h1 className="text-2xl font-bold mb-4 border-b-4 border-dashed border-white pb-2 text-center pixel-text glow-text">
                            資訊圈性格測試
                        </h1>
                        <div className="mb-6">
                            <div className="flex justify-between text-xs mb-2 pixel-text">
                                <span className="text-yellow-300 blink-text">
                                    &gt; 系統掃描中...
                                </span>
                                <span className="text-cyan-300">
                                    {currentQuestion + 1} / {Questions.length}
                                </span>
                            </div>
                            <div className="w-full bg-gray-700 h-4 rounded-none pixel-border overflow-hidden">
                                <div
                                    className="progress-bar pixel-progress"
                                    style={{
                                        width: `${((currentQuestion + 1) / Questions.length) * 100}%`,
                                    }}
                                ></div>
                            </div>
                        </div>
                        <div className="cyber-box mb-6 pixel-border">
                            <h2 className="text-xl mb-4 text-yellow-300 pixel-text">
                                {typingEffect}
                                <span className={typingComplete ? 'hidden' : 'cursor-blink'}>
                                    _
                                </span>
                            </h2>
                        </div>
                        <div className="space-y-3">
                            {shuffledOptions.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleAnswer(option, index)}
                                    className={`option-btn option-${index} pixel-btn ${typingComplete ? 'fade-in' : 'opacity-0'
                                        } ${selectedOption === index && showSelectEffect
                                            ? 'option-selected'
                                            : ''
                                        }`}
                                    disabled={!typingComplete}
                                    style={{ animationDelay: `${0.1 * index + 0.5}s` }}
                                >
                                    <span className="option-letter pixel-text">
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                    <span className="pixel-text">{getOption(option)}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="text-center fade-in">
                        <h1 className="text-2xl font-bold mb-4 border-b-4 border-dashed border-white pb-2 pixel-text glow-text">
                            性格分析結果
                        </h1>
                        <div className="mb-6 pixel-result">{getResult().image}</div>
                        <div className="cyber-box mb-6 pixel-border blink-border">
                            <h2 className="text-2xl font-bold mb-2 text-yellow-300 pixel-text glow-text">
                                你是「{getResult().type}」
                            </h2>
                            <p className="mb-4 pixel-text">{getResult().description}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-xs mb-6">
                            <div className="attribute-box pixel-border">
                                <div className="mb-1 text-yellow-300 pixel-text">
                                    哥布林指數
                                </div>
                                <div className="w-full bg-gray-700 h-4 rounded-none overflow-hidden">
                                    <div
                                        className="attribute-bar pixel-progress"
                                        style={{
                                            width: `${(answers.filter((a) => a === 'A' || a === 'B').length /
                                                Questions.length) *
                                                100
                                                }%`,
                                        }}
                                    ></div>
                                </div>
                                <div className="mt-1 text-right text-cyan-300 pixel-text">
                                    {(
                                        (answers.filter((a) => a === 'A' || a === 'B').length /
                                            Questions.length) *
                                        100
                                    ).toFixed(0)}
                                    %
                                </div>
                            </div>
                            <div className="attribute-box pixel-border">
                                <div className="mb-1 text-cyan-300 pixel-text">
                                    精靈指數
                                </div>
                                <div className="w-full bg-gray-700 h-4 rounded-none overflow-hidden">
                                    <div
                                        className="attribute-bar-alt pixel-progress"
                                        style={{
                                            width: `${(answers.filter((a) => a === 'C' || a === 'D').length /
                                                Questions.length) *
                                                100
                                                }%`,
                                        }}
                                    ></div>
                                </div>
                                <div className="mt-1 text-right text-yellow-300 pixel-text">
                                    {(
                                        (answers.filter((a) => a === 'C' || a === 'D').length /
                                            Questions.length) *
                                        100
                                    ).toFixed(0)}
                                    %
                                </div>
                            </div>
                        </div>
                        <button onClick={restartQuiz} className="pixel-btn action-btn">
                            重新測驗
                        </button>
                        <Links />
                        <div className="mt-6 text-xs text-gray-400 pixel-text">
                            [ 2025 SITCON ]
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
