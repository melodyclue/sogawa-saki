import { faCalendar, faMusic, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// bg-gradient-to-tl from-blue-500 to-purple-600
export const AnnouncementBanner = () => {
  return (
    <div className="overflow-hidden rounded-xl group bg-white border relative">
      <Link
        target="_blank"
        href="https://x.com/STU48_official_/status/1862833620068810834"
        className="absolute inset-0 z-10 hidden md:block"
      />

      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-2/5 lg:w-1/3 overflow-hidden">
          <Image
            src="/11th-sogawa-saki.jpeg"
            alt="STU48 11th Single Sogawa Saki"
            className="h-full w-full object-cover overflow-hidden group-hover:scale-105 transition-all duration-300"
            width={720}
            height={720}
          />
        </div>

        <div className="flex-1 p-6">
          <div className="space-y-2">
            <h2 className="text-md font-medium tracking-wider">STU48 11th Single</h2>
            <h1 className="text-2xl font-bold tracking-wide text-slate-800">地平線を見ているか？</h1>
          </div>

          <div className="grid grid-cols-1 gap-2 mt-8 mb-6">
            <div className="flex items-center gap-2 text-slate-800">
              <FontAwesomeIcon icon={faCalendar} className="w-4 h-4 shrink-0 tracking-wide" />
              <span className="text-sm">2024年1月15日(水)発売</span>
            </div>
            <div className="flex items-center gap-2 text-slate-800">
              <FontAwesomeIcon icon={faUser} className="w-4 h-4 shrink-0" />
              <span className="text-sm">
                センター: <strong>曽川咲葵 (初選抜)</strong>
              </span>
            </div>
            <div className="flex items-center gap-2 text-slate-800">
              <FontAwesomeIcon icon={faMusic} className="w-4 h-4 shrink-0" />
              <span className="text-sm">アーティスト写真＆ジャケット写真公開中！</span>
            </div>
          </div>

          <div className="space-y-3 text-slate-800">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs border px-3 py-1 rounded-full">#STU48</span>
              <span className="text-xs border px-3 py-1 rounded-full">#地平線を見ているか？</span>
              <span className="text-xs border px-3 py-1 rounded-full">#曽川咲葵</span>
            </div>
          </div>

          <div className="flex justify-end mt-6 md:hidden">
            <Link
              target="_blank"
              href="https://x.com/STU48_official_/status/1862833620068810834"
              className="text-sm text-slate-800 rounded-full px-4 py-2 border border-slate-200 bg-slate-50/50"
            >
              詳細はこちら
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
