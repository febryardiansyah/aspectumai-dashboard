'use client';

import { Button } from '@/components/global/button';
import Dropdown from '@/components/global/dropdown';
import { Input } from '@/components/global/input';
import TextArea from '@/components/global/text-area';
import TextLabel from '@/components/global/text-label';
import { DropdownMenu } from '@radix-ui/react-dropdown-menu';
import { ArrowLeftCircleIcon, Edit } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function CreateBotModule() {
  const router = useRouter();

  const [selectedAvatar, setSelectedAvatar] = useState<File | null>();
  const selectAvatarRef = React.useRef<HTMLInputElement>(null);
  const [selectBanner, setSelectBanner] = useState<File | null>();
  const selectBannerRef = React.useRef<HTMLInputElement>(null);

  const inputOutputTypes = ['text', 'image'];
  const aiModels = ['GPT-3', 'GPT-4', 'GPT-5', 'GPT-6'];
  const categories = ['General', 'Finance', 'Health', 'Education'];

  const handleSelectAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    if (file) setSelectedAvatar(file);
  };

  const handleSelectBanner = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    if (file) setSelectBanner(file);
  };

  return (
    <div className="flex flex-col items-start justify-center max-w-screen-lg w-full mx-auto gap-5">
      <div className="flex flex-row gap-4 items-center">
        <ArrowLeftCircleIcon
          className="h-6 w-6 cursor-pointer"
          onClick={() => router.push('/')}
        />
        <div className="text-[32px] font-semibold">Create New Bot</div>
      </div>

      <div className="w-full flex flex-col gap-6">
        {/* avatar */}
        <div className="flex flex-col gap-2">
          <TextLabel label="Avatar" required />
          <div
            className="w-24 h-24 rounded-md bg-gray-300 flex items-center justify-center place-self-center cursor-pointer"
            onClick={() => {
              selectAvatarRef.current?.click();
            }}
          >
            {selectedAvatar ? (
              <img
                src={URL.createObjectURL(selectedAvatar)}
                alt="avatar"
                className="w-full h-full object-cover rounded-md"
              />
            ) : (
              <span className="text-lg text-white">Avatar</span>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleSelectAvatar}
            className="hidden"
            ref={selectAvatarRef}
          />
        </div>

        {/* banner */}
        <div className="flex flex-col gap-2">
          <TextLabel label="Banner" />
          <div
            className="h-[200px] w-[200px] place-self-center cursor-pointer"
            onClick={() => selectBannerRef.current?.click()}
          >
            {selectBanner ? (
              <img
                src={URL.createObjectURL(selectBanner)}
                alt="banner"
                className="w-full h-full object-cover rounded-md"
              />
            ) : (
              <span className="h-full w-full bg-blue-500 text-lg text-white flex items-center justify-center">Banner</span>
            )}
          </div>

          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={selectBannerRef}
            onChange={handleSelectBanner}
          />
        </div>

        {/* form */}
        <form className="flex flex-col gap-4 w-full">
          <Input
            placeholder="Enter bot name"
            className="w-full"
            label="Name"
            required
          />

          <TextArea
            placeholder="Enter bot description"
            className="w-full"
            label="Description"
            required
          />

          <TextArea
            placeholder="Enter bot instruction"
            className="w-full"
            label="Instruction"
            required
          />

          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-1">
              <TextLabel label="Input Type" />
              <span className="text-red-500">*</span>
            </div>
            <div className="flex flex-col gap-2">
              {inputOutputTypes.map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <input type="checkbox" className="form-checkbox" />
                  {item}
                </label>
              ))}
            </div>
          </div>

          <Dropdown
            options={inputOutputTypes}
            onSelect={(option) => console.log(option)}
            label="Output Type"
            required
          />

          <Dropdown
            options={aiModels}
            onSelect={(option) => console.log(option)}
            label="Model"
            required
          />

          <Dropdown
            options={categories}
            onSelect={(option) => console.log(option)}
            label="Category"
            required
          />

          <TextArea
            placeholder="Enter greetings"
            className="w-full min-h"
            label="Greetings"
            required
          />

          <Input label="Token Price" required type="number" />

          <Button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Save
          </Button>
        </form>
      </div>
    </div>
  );
}
