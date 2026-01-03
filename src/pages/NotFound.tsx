import { Home, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <div className="relative inline-block">
            <h1 className="text-[200px] md:text-[250px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-yellow-500 leading-none">
              404
            </h1>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-6xl">😔</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            عذراً، الصفحة غير موجودة!
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            يبدو أن الصفحة التي تبحث عنها قد تم نقلها أو حذفها أو أنها غير موجودة أصلاً.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6 text-right">
              <div className="flex items-center gap-3 mb-3 justify-end">
                <h3 className="text-lg font-bold text-gray-800">تحقق من الرابط</h3>
                <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white">
                  <Search size={20} />
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                تأكد من كتابة عنوان URL بشكل صحيح
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 text-right">
              <div className="flex items-center gap-3 mb-3 justify-end">
                <h3 className="text-lg font-bold text-gray-800">العودة للرئيسية</h3>
                <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white">
                  <Home size={20} />
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                ابدأ من الصفحة الرئيسية للجمعية
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button variant="primary" size="lg" className="gap-2 w-full sm:w-auto">
                <Home size={20} />
                <span>العودة للرئيسية</span>
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="secondary" size="lg" className="gap-2 w-full sm:w-auto">
                <ArrowRight size={20} />
                <span>تصفح المشاريع</span>
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-8 text-gray-600">
          <p className="text-sm">
            هل تحتاج إلى مساعدة؟{' '}
            <Link to="/contact" className="text-teal-700 font-semibold hover:text-teal-800 underline">
              اتصل بنا
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
