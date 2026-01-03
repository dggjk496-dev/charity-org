import { useState } from 'react';
import { DollarSign, CreditCard, MapPin, Building, Shield, Heart, ChevronDown } from 'lucide-react';
import Button from '../components/ui/Button';

export default function Donate() {
  const [amount, setAmount] = useState(2000);
  const [customAmount, setCustomAmount] = useState('');
  const [hideInfo, setHideInfo] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const predefinedAmounts = [500, 1000, 2000, 5000, 10000];

  const handleAmountSelect = (value: number) => {
    setAmount(value);
    setCustomAmount('');
  };

  const handleCustomAmount = (value: string) => {
    setCustomAmount(value);
    setAmount(parseInt(value) || 0);
  };

  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      alert('شكراً لتبرعك الكريم!');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-bl from-gray-700 via-gray-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-yellow-400 text-sm font-medium">معًا لنحقق التغيير</span>
            <div className="w-8 h-8 bg-teal-700 rounded-full flex items-center justify-center">
              <Heart size={20} />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">طرق التبرع</h1>
          <p className="text-xl text-gray-300">تبرعك يصنع فرقًا في حياة المحتاجين</p>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-16">
              <img
                src="https://images.pexels.com/photos/6347720/pexels-photo-6347720.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="التبرع"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
              <div className="absolute bottom-0 right-0 left-0 p-12 text-white text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  كن يد العون للفقراء والمحتاجين وسبيلهم
                </h2>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                  يمكنكم المساهمة في تغيير حياة الفقراء والمحتاجين عبر أحد طرق التبرع التالية
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 mb-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                      التبرع النقدي المباشر :
                    </h2>
                    <p className="text-gray-600">
                      يمكنكم زيارة مقرّ الجمعية أو منسقي الجمعية بمختلف الولايات لتقديم تبرعاتكم النقدية بطريقة مباشرة.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6 border-r-4 border-teal-600">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center text-white">
                          <CreditCard size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">عبر الموقع الإلكتروني:</h3>
                      </div>
                      <p className="text-gray-700 text-sm">
                        يمكنكم تقديم تبرعاتكم مباشرة على موقعنا الإلكتروني عبر البطاقة.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 border-r-4 border-yellow-500">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-white">
                          <MapPin size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">عبر مكاتب البريد الجزائري:</h3>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="bg-white rounded-lg p-3">
                          <p className="text-gray-600 font-semibold mb-1">يمكنكم إجراء تحويل بريدي عبر مكاتب البريد أو عبر البريد الإلكتروني:</p>
                          <div className="space-y-1">
                            <p className="text-gray-800"><span className="font-bold">CCP:</span> 210.243.20 الجزائر</p>
                            <p className="text-gray-800"><span className="font-bold">RIP:</span> 00799899260210242914</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-r-4 border-blue-600">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white">
                        <Building size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">التحويلات البنكية:</h3>
                    </div>
                    <p className="text-gray-700 text-sm mb-3">
                      يمكنكم تحويل تبرعاتكم عبر البنوك التالي:
                    </p>
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-gray-800"><span className="font-bold">CPA:</span> 004 001 854 100 009 720 30</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">تبرّع الآن</h2>
                    <p className="text-gray-600">اختر المبلغ وساهم في تغيير حياة المحتاجين</p>
                  </div>

                  <form onSubmit={handleDonate}>
                    <div className="mb-6">
                      <label className="block text-right text-gray-700 font-semibold mb-3">
                        تبرّع بـ:
                      </label>
                      <div className="flex items-center gap-4 mb-4">
                        <input
                          type="text"
                          value={customAmount || amount}
                          onChange={(e) => handleCustomAmount(e.target.value)}
                          className="flex-1 px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-right text-2xl font-bold focus:outline-none focus:border-teal-500 transition-colors"
                          placeholder="2000"
                        />
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-600 to-teal-700 flex items-center justify-center text-white shadow-lg">
                          <DollarSign size={32} />
                        </div>
                      </div>
                      <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                        {predefinedAmounts.map((value) => (
                          <button
                            key={value}
                            type="button"
                            onClick={() => handleAmountSelect(value)}
                            className={`py-3 px-4 rounded-lg font-bold transition-all ${
                              amount === value && !customAmount
                                ? 'bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-lg scale-105'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {value}
                          </button>
                        ))}
                        <button
                          type="button"
                          onClick={() => setCustomAmount('0')}
                          className={`py-3 px-4 rounded-lg font-bold transition-all ${
                            customAmount && amount !== 2000
                              ? 'bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-lg scale-105'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          مخصص
                        </button>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-right">
                        <div className="flex items-center gap-3 mb-2">
                          <ChevronDown className="text-yellow-600" size={20} />
                          <p className="text-gray-700 font-semibold">
                            بالضغط: استمتع لنا جسور نشر ونوزّع الخير بكل حيادية.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="flex items-center gap-3 cursor-pointer justify-end">
                        <span className="text-gray-700">أريد عدم الكشف عن الاسم والعنوان</span>
                        <input
                          type="checkbox"
                          checked={hideInfo}
                          onChange={(e) => setHideInfo(e.target.checked)}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-2 focus:ring-teal-500"
                        />
                      </label>
                    </div>

                    <div className="mb-6">
                      <div className="flex justify-end">
                        <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 inline-flex items-center gap-2">
                          <span className="text-gray-600 text-sm">reCAPTCHA</span>
                          <Shield className="text-gray-500" size={20} />
                        </div>
                      </div>
                    </div>

                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full gap-2"
                      onClick={() => {}}
                    >
                      {isProcessing ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>جاري المعالجة...</span>
                        </>
                      ) : (
                        <>
                          <Heart size={20} />
                          <span>تبرع الآن</span>
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>

              <div className="lg:col-span-1 space-y-6">
                <div className="bg-gradient-to-br from-teal-700 to-teal-800 rounded-2xl shadow-xl p-8 text-white sticky top-24">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl">🌱</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">ملاذ بسيط يصنع الفارق</h3>
                    <p className="text-teal-100 text-sm">
                      إطعام. صحة وتعليم للشعوب المستضعفة في كل مكان
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 mb-6 backdrop-blur-sm">
                    <h4 className="text-lg font-bold mb-4 text-center">لماذا تتبرع؟</h4>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <Shield className="flex-shrink-0 mt-1" size={16} />
                        <span>شفافية كاملة في استخدام التبرعات</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Heart className="flex-shrink-0 mt-1" size={16} />
                        <span>وصول مباشر للمحتاجين</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Building className="flex-shrink-0 mt-1" size={16} />
                        <span>مشاريع مستدامة ومؤثرة</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <MapPin className="flex-shrink-0 mt-1" size={16} />
                        <span>تغطية في أكثر من 30 دولة</span>
                      </li>
                    </ul>
                  </div>

                  <Button variant="outline" size="md" className="w-full">
                    اطلب استشارة
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">هذا فخذا لحرث لزرع الخير في قلوب المحتاجين.</h2>
          <p className="text-xl text-gray-900 mb-8 max-w-3xl mx-auto">
            كل تبرع يساهم في بناء مستقبل أفضل للأسر المحتاجة حول العالم
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-yellow-600">
              تعرف على مشاريعنا
            </Button>
            <Button variant="secondary" size="lg">
              اتصل بنا
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
